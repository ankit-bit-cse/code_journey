// Shared behaviour for every js-for-dsa page:
// - gives each day its own colour, numbers the section headings, colours the code
// - fades cards in as you scroll, with a reading progress bar
// - Lesson.trace(selector, config): a step-by-step player that animates code running
// - Teach mode: one section at a time, big, driven from the keyboard
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
//       ptrs: { i: 0, j: 2 },          // pointer arrows above the boxes, by index (each gets its own colour,
//                                      // and a variable with the same name gets that colour too)
//       grid: [[1, 2], [3, 4]],        // a 2D array drawn as a grid
//       ghi: { "0,1": "active" },      // grid box state by "row,col"
//       map: { a: 2, b: 1 },           // an object / Map drawn as key -> value chips
//       mhi: "a"                       // the map key to highlight
//     }
//   ],
//   mapLabel: "count",                 // optional title above the map chips
//   stacked: true,                     // optional: code above the boxes, for long rows
//   speed: 1300                        // optional: ms per step when playing
// }
(function () {
  // One colour pair (two hues for the gradient) per day, picked so white text stays readable.
  const HUES = [[222, 262], [262, 300], [328, 8], [8, 335], [28, 350], [152, 190], [178, 215], [198, 240], [240, 280], [288, 325]];
  const PTR_COLORS = ["hsl(222 85% 55%)", "hsl(24 92% 52%)", "hsl(150 65% 36%)", "hsl(290 60% 55%)", "hsl(350 78% 55%)", "hsl(186 80% 34%)"];
  const BURST_COLORS = ["var(--accent)", "var(--accent-2)", "var(--good)", "var(--warn)", "hsl(340 85% 60%)"];
  const dayMatch = location.pathname.match(/day-(\d+)/);
  const dayNum = dayMatch ? Number(dayMatch[1]) : 0;
  const [h1, h2] = dayNum ? HUES[(dayNum - 1) % HUES.length] : [250, 300];
  document.documentElement.style.setProperty("--h", h1);
  document.documentElement.style.setProperty("--h2", h2);

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

  // A little confetti burst from the middle of a box.
  function burst(box) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const b = el("span", "burst");
    for (let i = 0; i < 14; i++) {
      const p = el("i");
      p.style.setProperty("--a", (i * 360) / 14 + "deg");
      p.style.setProperty("--c", BURST_COLORS[i % BURST_COLORS.length]);
      b.append(p);
    }
    box.append(b);
    setTimeout(() => b.remove(), 900);
  }

  const SPEEDS = [["normal", 1], ["fast", 0.5], ["slow", 2]];

  function trace(target, cfg) {
    const root = typeof target === "string" ? document.querySelector(target) : target;
    root.classList.add("trace");
    root.classList.toggle("trace-stacked", !!cfg.stacked);
    root.tabIndex = 0;
    root.textContent = "";

    // Each pointer name gets its own colour, in order of first appearance.
    const ptrColor = {};
    cfg.frames.forEach((f) => Object.keys(f.ptrs || {}).forEach((name) => {
      if (!(name in ptrColor)) ptrColor[name] = PTR_COLORS[Object.keys(ptrColor).length % PTR_COLORS.length];
    }));

    const head = el("div", "trace-head");
    const stepLabel = el("span", "trace-step");
    head.append(el("strong", null, cfg.title || "Watch it run"), stepLabel);
    const bar = el("div", "trace-bar");
    const barFill = el("div");
    bar.append(barFill);

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
    const btnSpeed = el("button", null, "Speed: normal");
    const slider = el("input");
    slider.type = "range";
    slider.min = 0;
    slider.max = cfg.frames.length - 1;
    slider.value = 0;
    slider.setAttribute("aria-label", "step");
    btnReset.setAttribute("aria-label", "back to the start");
    btnReset.title = "Back to the start";
    ctrl.append(btnReset, btnPrev, btnPlay, btnNext, btnSpeed, slider);

    root.append(head, bar, body, note, ctrl);

    let step = 0, timer = null, prevVars = {}, prevCells = [], speed = 0, lastStep = -1;
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
    const hasFound = (f) => f && (Object.values(f.hi || {}).includes("found") || Object.values(f.ghi || {}).includes("found"));

    function render() {
      const f = cfg.frames[step];
      const forward = step === lastStep + 1;
      stepLabel.textContent = "step " + (step + 1) + " / " + cfg.frames.length;
      barFill.style.width = ((step + 1) / cfg.frames.length) * 100 + "%";
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
            x = el("div", "trace-ptr");
            x.append(el("span", null, name));
            x.dataset.name = name;
            x.style.setProperty("--pc", ptrColor[name]);
            ptrs.append(x);
          }
          const level = (stack[idx] = (stack[idx] || 0) + 1) - 1;
          // Pointers on the same box stack upwards; only the lowest one keeps its arrow.
          x.classList.toggle("stacked", level > 0);
          x.style.transform = "translate(calc(" + idx + " * (var(--cell) + var(--gap))), " + (-30 - level * 18) + "px)";
          x.style.visibility = idx < 0 || idx > list.length ? "hidden" : "visible";
        });
        const levels = Math.max(0, ...Object.values(stack));
        row.style.paddingTop = (levels ? 32 + (levels - 1) * 18 : 0) + "px";
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
          if (ptrColor[k]) {
            chip.classList.add("ptr-var");
            chip.style.setProperty("--pc", ptrColor[k]);
          }
          vars.append(chip);
        });
        prevVars = Object.assign({}, f.vars);
      }

      // Celebrate when stepping forward onto a frame that newly finds something.
      if (forward && hasFound(f) && !hasFound(cfg.frames[step - 1])) {
        root.querySelectorAll(".box.found").forEach(burst);
      }

      note.textContent = f.note || "";
      note.dataset.step = step + 1;
      note.classList.remove("pop");
      void note.offsetWidth;
      note.classList.add("pop");
      btnPrev.disabled = step === 0;
      btnNext.disabled = step === cfg.frames.length - 1;
      lastStep = step;
    }

    const reset = () => { prevVars = {}; prevCells = []; };
    const stop = () => { clearInterval(timer); timer = null; btnPlay.textContent = "▶ Play"; };
    const go = (n) => { step = Math.max(0, Math.min(cfg.frames.length - 1, n)); render(); };
    const next = () => { stop(); go(step + 1); };
    const prev = () => { stop(); reset(); go(step - 1); };
    const restart = () => { stop(); reset(); go(0); };
    const tick = () => (cfg.speed || 1300) * SPEEDS[speed][1];
    const play = () => {
      if (timer) return stop();
      if (step === cfg.frames.length - 1) restart();
      btnPlay.textContent = "⏸ Pause";
      timer = setInterval(() => {
        if (step >= cfg.frames.length - 1) return stop();
        go(step + 1);
      }, tick());
    };
    btnNext.onclick = next;
    btnPrev.onclick = prev;
    btnReset.onclick = restart;
    btnPlay.onclick = play;
    btnSpeed.onclick = () => {
      speed = (speed + 1) % SPEEDS.length;
      btnSpeed.textContent = "Speed: " + SPEEDS[speed][0];
      if (timer) { stop(); play(); }
    };
    slider.oninput = () => { stop(); reset(); go(Number(slider.value)); };
    root.addEventListener("keydown", (e) => {
      if (document.documentElement.classList.contains("teach")) return; // teach mode handles keys itself
      if (e.target === slider) return;
      if (e.key === "ArrowRight") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      else if (e.key === " ") { e.preventDefault(); play(); }
    });
    root._trace = { next, prev, play, stop };

    // ?step=N in the URL opens every trace at step N (handy for screenshots).
    const start = Number(new URLSearchParams(location.search).get("step"));
    go(start ? start - 1 : 0);
  }

  // Teach mode: show one section at a time, in big text.
  function setupTeach(lesson) {
    const slides = [...lesson.children].filter((c) => c.tagName !== "SCRIPT");
    if (slides.length < 2) return;
    const root = document.documentElement;
    const btn = el("button", "teach-btn", "Teach mode");
    btn.title = "Show one section at a time, in big text (T)";
    const tbar = el("div", "teach-bar");
    const prevBtn = el("button", null, "◀");
    const count = el("span", "teach-count");
    const nextBtn = el("button", "primary", "Next section ▶");
    const exitBtn = el("button", null, "Exit");
    const keys = el("span");
    keys.innerHTML = "<kbd>↓</kbd><kbd>↑</kbd> section · <kbd>←</kbd><kbd>→</kbd> animation step · <kbd>Space</kbd> play · <kbd>Esc</kbd> exit";
    tbar.append(prevBtn, count, nextBtn, exitBtn, keys);
    document.body.append(btn, tbar);

    let cur = 0;
    const show = (n, back) => {
      cur = Math.max(0, Math.min(slides.length - 1, n));
      slides.forEach((s, i) => {
        s.classList.toggle("slide-on", i === cur);
        s.classList.toggle("back", i === cur && !!back);
      });
      count.textContent = cur + 1 + " / " + slides.length;
      prevBtn.disabled = cur === 0;
      nextBtn.disabled = cur === slides.length - 1;
      window.scrollTo(0, 0);
    };
    const enter = () => {
      // Start from the section that is on screen now.
      const i = slides.findIndex((s) => s.getBoundingClientRect().bottom > 80);
      root.classList.add("teach");
      show(i < 0 ? 0 : i);
    };
    const exit = () => {
      const s = slides[cur];
      root.classList.remove("teach");
      slides.forEach((x) => x.classList.remove("slide-on", "back"));
      s.scrollIntoView({ block: "start" });
    };
    const currentTrace = () => {
      const t = slides[cur].querySelectorAll(".trace");
      const focused = [...t].find((x) => x.contains(document.activeElement));
      return (focused || t[0] || {})._trace;
    };
    btn.onclick = enter;
    exitBtn.onclick = exit;
    prevBtn.onclick = () => show(cur - 1, true);
    nextBtn.onclick = () => show(cur + 1);
    document.addEventListener("keydown", (e) => {
      if (e.target.tagName === "INPUT") return;
      if (!root.classList.contains("teach")) {
        if ((e.key === "t" || e.key === "T") && !e.ctrlKey && !e.metaKey) enter();
        return;
      }
      const t = currentTrace();
      if (["ArrowDown", "PageDown", "Enter"].includes(e.key)) { e.preventDefault(); show(cur + 1); }
      else if (["ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); show(cur - 1, true); }
      else if (e.key === "Escape") exit();
      else if (e.key === "ArrowRight" && t) { e.preventDefault(); t.next(); }
      else if (e.key === "ArrowLeft" && t) { e.preventDefault(); t.prev(); }
      else if (e.key === " " && t) { e.preventDefault(); t.play(); }
    });
    // ?teach=N opens teach mode at section N.
    const n = Number(new URLSearchParams(location.search).get("teach"));
    if (n) { root.classList.add("teach"); show(n - 1); }
  }

  function init() {
    document.querySelectorAll("pre > code").forEach((c) => { c.innerHTML = highlight(c.textContent); });

    // Big day number in the banner.
    const hero = document.querySelector(".hero");
    if (hero && dayNum) hero.prepend(el("span", "hero-num", String(dayNum).padStart(2, "0")));

    // "3. Watch it run" -> a coloured number badge + "Watch it run".
    document.querySelectorAll(".card h2").forEach((h) => {
      const t = h.firstChild;
      const m = t && t.nodeType === 3 && t.textContent.match(/^\s*(\d+)\.\s*/);
      if (!m) return;
      t.textContent = t.textContent.slice(m[0].length);
      h.prepend(el("span", "num", m[1]));
    });

    // Index page: each day in its own colour.
    document.querySelectorAll(".days li").forEach((li, i) => {
      li.style.setProperty("--dh", HUES[i % HUES.length][0]);
      li.style.setProperty("--dh2", HUES[i % HUES.length][1]);
      const b = li.querySelector("b");
      const m = b && b.textContent.match(/Day (\d+)/);
      if (m) b.innerHTML = "DAY<big>" + m[1] + "</big>";
    });

    // Reading progress bar.
    const progress = el("div", "progress");
    document.body.append(progress);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const lesson = document.querySelector(".lesson");
    if (lesson && dayNum) setupTeach(lesson);

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
