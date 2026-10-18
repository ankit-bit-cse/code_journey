// Shared behaviour for every js-for-dsa/day-NN/concept.html page:
// - colours the code in <pre><code> blocks
// - fades cards in as you scroll
// - Lesson.trace(selector, config): a step-by-step player that animates code running
//
// A trace config looks like:
// {
//   title: "Sum of digits",
//   code: ["let sum = 0;", "while (n > 0) {", ...],   // shown on the left, one string per line
//   frames: [                                          // one object per step
//     {
//       line: 2,                       // 1-based line of `code` to highlight
//       note: "n is 472, so the loop runs",
//       vars: { n: 472, sum: 0 },      // variable chips; a changed value flashes
//       cells: [4, 7, 2],              // an array (or string chars) drawn as boxes
//       hi: { 2: "active" },           // box state by index: active | compare | done | found | bad | dim
//       ptrs: { i: 0, j: 2 },          // pointer arrows above the boxes, by index
//       grid: [[1, 2], [3, 4]],        // a 2D array drawn as a grid
//       ghi: { "0,1": "active" },      // grid box state by "row,col"
//       map: { a: 2, b: 1 },           // an object / Map drawn as key -> value chips
//       mhi: "a"                       // the map key to highlight
//     }
//   ],
//   mapLabel: "count",                 // optional title above the map chips
//   stacked: true                      // optional: code above the boxes, for long rows
// }
(function () {
  const el = (tag, cls, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };

  const show = (v) =>
    typeof v === "string" ? JSON.stringify(v)
    : Array.isArray(v) ? "[" + v.map(show).join(", ") + "]"
    : v instanceof Set ? "Set {" + [...v].map(show).join(", ") + "}"
    : v && typeof v === "object" ? "{ " + Object.entries(v).map(([k, x]) => k + ": " + show(x)).join(", ") + " }"
    : String(v);

  // Tiny syntax colouring for JS snippets.
  const KW = /^(const|let|var|function|return|if|else|for|while|do|of|in|new|true|false|null|undefined|break|continue|typeof|NaN|Infinity)$/;
  const TOKEN = /(\/\/.*$)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`[^`]*`)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)/gm;
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  function highlight(src) {
    let out = "", last = 0, m;
    TOKEN.lastIndex = 0;
    while ((m = TOKEN.exec(src))) {
      out += esc(src.slice(last, m.index));
      const [t, com, str, num, word] = m;
      if (com) out += '<span class="tok-com">' + esc(t) + "</span>";
      else if (str) out += '<span class="tok-str">' + esc(t) + "</span>";
      else if (num) out += '<span class="tok-num">' + t + "</span>";
      else if (word && KW.test(word)) out += '<span class="tok-kw">' + t + "</span>";
      else out += esc(t);
      last = m.index + t.length;
    }
    return out + esc(src.slice(last));
  }

  function trace(target, cfg) {
    const root = typeof target === "string" ? document.querySelector(target) : target;
    root.classList.add("trace");
    root.classList.toggle("trace-stacked", !!cfg.stacked);
    root.textContent = "";

    const head = el("div", "trace-head");
    const stepLabel = el("span", "trace-step");
    head.append(el("strong", null, cfg.title || "Watch it run"), stepLabel);

    const code = el("pre", "trace-code");
    const lines = cfg.code.map((text) => {
      const ln = el("span", "ln");
      ln.innerHTML = highlight(text || " ");
      code.append(ln);
      return ln;
    });

    const stage = el("div", "trace-stage");
    const arrayWrap = el("div", "trace-scroll");
    const row = el("div", "trace-row");
    const ptrs = el("div", "trace-ptrs");
    const cells = el("div", "trace-cells");
    row.append(ptrs, cells);
    arrayWrap.append(row);
    const gridWrap = el("div", "trace-scroll");
    const grid = el("div", "trace-grid");
    gridWrap.append(grid);
    const mapWrap = el("div");
    const map = el("div", "trace-map");
    mapWrap.append(el("div", "trace-label", cfg.mapLabel || "map"), map);
    const varsWrap = el("div");
    const vars = el("div", "trace-vars");
    varsWrap.append(el("div", "trace-label", "variables"), vars);
    stage.append(arrayWrap, gridWrap, mapWrap, varsWrap);

    const body = el("div", "trace-body");
    body.append(code, stage);
    const note = el("p", "trace-note");

    const ctrl = el("div", "trace-ctrl");
    const btnReset = el("button", null, "⏮");
    const btnPrev = el("button", null, "◀ Back");
    const btnPlay = el("button", "primary", "▶ Play");
    const btnNext = el("button", null, "Next ▶");
    const slider = el("input");
    slider.type = "range";
    slider.min = 0;
    slider.max = cfg.frames.length - 1;
    slider.value = 0;
    slider.setAttribute("aria-label", "step");
    btnReset.setAttribute("aria-label", "back to the start");
    ctrl.append(btnReset, btnPrev, btnPlay, btnNext, slider);

    root.append(head, body, note, ctrl);

    let step = 0, timer = null, prevVars = {}, prevCells = [];
    const hasCells = cfg.frames.some((f) => f.cells), hasGrid = cfg.frames.some((f) => f.grid);
    const hasMap = cfg.frames.some((f) => f.map), hasVars = cfg.frames.some((f) => f.vars);
    arrayWrap.hidden = !hasCells;
    gridWrap.hidden = !hasGrid;
    mapWrap.hidden = !hasMap;
    varsWrap.hidden = !hasVars;

    const box = (value, state, changed) => {
      const b = el("div", "box" + (state ? " " + state : ""), value === "" ? "␣" : show(value).replace(/^"(.*)"$/, "$1"));
      if (changed) b.classList.add("flash");
      return b;
    };

    function render() {
      const f = cfg.frames[step];
      stepLabel.textContent = "step " + (step + 1) + " / " + cfg.frames.length;
      slider.value = step;
      lines.forEach((ln, i) => ln.classList.toggle("on", i + 1 === f.line));

      if (hasCells) {
        const list = f.cells || [];
        cells.textContent = "";
        list.forEach((v, i) => {
          const c = el("div", "trace-cell");
          c.append(box(v, f.hi && f.hi[i], prevCells.length && prevCells[i] !== v), el("div", "idx", String(i)));
          cells.append(c);
        });
        prevCells = list.slice();
        // Pointers: reuse elements so they slide instead of jumping.
        const p = f.ptrs || {};
        const stack = {};
        ptrs.querySelectorAll(".trace-ptr").forEach((x) => { if (!(x.dataset.name in p)) x.remove(); });
        Object.entries(p).forEach(([name, idx]) => {
          let x = ptrs.querySelector('[data-name="' + name + '"]');
          if (!x) {
            x = el("div", "trace-ptr", name);
            x.dataset.name = name;
            ptrs.append(x);
          }
          const level = (stack[idx] = (stack[idx] || 0) + 1) - 1;
          // Pointers on the same box stack upwards; only the lowest one keeps its arrow.
          x.classList.toggle("stacked", level > 0);
          x.style.transform = "translate(calc(" + idx + " * (var(--cell) + var(--gap))), " + (-26 - level * 15) + "px)";
          x.style.visibility = idx < 0 || idx > list.length ? "hidden" : "visible";
        });
        const levels = Math.max(0, ...Object.values(stack));
        row.style.paddingTop = (levels ? 28 + (levels - 1) * 15 : 0) + "px";
      }

      if (hasGrid) {
        const g = f.grid || [];
        grid.textContent = "";
        grid.style.gridTemplateColumns = "repeat(" + ((g[0] || []).length || 1) + ", var(--cell))";
        g.forEach((r, ri) => r.forEach((v, ci) => grid.append(box(v, f.ghi && f.ghi[ri + "," + ci]))));
      }

      if (hasMap) {
        map.textContent = "";
        const entries = f.map instanceof Map ? [...f.map] : Object.entries(f.map || {});
        if (!entries.length) map.append(el("span", "chip", "(empty)"));
        const plain = (v) => (typeof v === "string" && v.trim() ? v : show(v));
        entries.forEach(([k, v]) => map.append(el("span", "chip" + (String(k) === String(f.mhi) ? " hot" : ""), plain(k) + " → " + plain(v))));
      }

      if (hasVars) {
        varsWrap.hidden = !f.vars || !Object.keys(f.vars).length;
        vars.textContent = "";
        Object.entries(f.vars || {}).forEach(([k, v]) => {
          const changed = k in prevVars && show(prevVars[k]) !== show(v);
          const chip = el("span", "chip" + (changed ? " hot flash" : ""), k + " = " + show(v));
          vars.append(chip);
        });
        prevVars = Object.assign({}, f.vars);
      }

      note.textContent = f.note || "";
      note.classList.remove("pop");
      void note.offsetWidth;
      note.classList.add("pop");
      btnPrev.disabled = step === 0;
      btnNext.disabled = step === cfg.frames.length - 1;
    }

    const stop = () => { clearInterval(timer); timer = null; btnPlay.textContent = "▶ Play"; };
    const go = (n) => { step = Math.max(0, Math.min(cfg.frames.length - 1, n)); render(); };
    btnNext.onclick = () => { stop(); go(step + 1); };
    btnPrev.onclick = () => { stop(); prevVars = {}; prevCells = []; go(step - 1); };
    btnReset.onclick = () => { stop(); prevVars = {}; prevCells = []; go(0); };
    slider.oninput = () => { stop(); prevVars = {}; prevCells = []; go(Number(slider.value)); };
    btnPlay.onclick = () => {
      if (timer) return stop();
      if (step === cfg.frames.length - 1) { prevVars = {}; prevCells = []; go(0); }
      btnPlay.textContent = "⏸ Pause";
      timer = setInterval(() => {
        if (step >= cfg.frames.length - 1) return stop();
        go(step + 1);
      }, cfg.speed || 1300);
    };
    // ?step=N in the URL opens every trace at step N (handy for screenshots).
    const start = Number(new URLSearchParams(location.search).get("step"));
    go(start ? start - 1 : 0);
  }

  function init() {
    document.querySelectorAll("pre > code").forEach((c) => { c.innerHTML = highlight(c.textContent); });
    // Cards stay visible unless this runs, so the page still works without animation.
    const cards = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("anim");
    // Cards already on screen show right away; the rest fade in as you scroll to them.
    const onScreen = (c) => c.getBoundingClientRect().top < window.innerHeight;
    requestAnimationFrame(() => cards.forEach((c) => { if (onScreen(c)) c.classList.add("seen"); }));
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("seen"); io.unobserve(e.target); }
    }), { threshold: 0 });
    cards.forEach((c) => io.observe(c));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.Lesson = { trace, show };
})();
