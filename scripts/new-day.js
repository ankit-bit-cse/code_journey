// Create the next day's folders with templates.
// Usage: npm run new-day -- "JavaScript topic" "Java topic"
// Example: npm run new-day -- "while loops and patterns" "while loops and patterns"
import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";

const [jsTopic, javaTopic] = process.argv.slice(2);
if (!jsTopic || !javaTopic) {
  console.error('Usage: npm run new-day -- "JavaScript topic" "Java topic"');
  process.exit(1);
}

const days = readdirSync("days").filter((d) => /^day-\d+$/.test(d)).map((d) => Number(d.slice(4)));
const n = (days.length ? Math.max(...days) : 0) + 1;
const nn = String(n).padStart(2, "0");
const dir = `days/day-${nn}`;
if (existsSync(dir)) throw new Error(`${dir} already exists`);

const files = {
  [`${dir}/javascript/README.md`]: `# Day ${n} · JavaScript · ${jsTopic}

## Concept

<!-- Explain the idea in simple words, with a small example. -->

\`\`\`js
\`\`\`

## Questions

Solve them in order in \`questions.js\`, then run \`npm test\`.

| # | Function | What it should do |
|---|----------|-------------------|
| Q1 | \`example(n)\` | |
`,
  [`${dir}/javascript/questions.js`]: `// Day ${n} · JavaScript · ${jsTopic}
// Replace each \`throw new Error("TODO")\` with your code. Solve them in order.
// Run \`npm test\` to check.

// Q1. Describe the question here.
// example(2) -> 4
export function example(n) {
  throw new Error("TODO");
}
`,
  [`${dir}/javascript/questions.test.js`]: `import { check } from "../../../scripts/check.js";
import * as q from "./questions.js";

// check(function, [[[arguments...], expected], ...])
check(q.example, [[[2], 4], [[5], 10]]);
`,
  [`${dir}/java/README.md`]: `# Day ${n} · Java · ${javaTopic}

## Concept

<!-- Explain the idea, and compare it with JavaScript where it helps. -->

\`\`\`java
\`\`\`

## Questions

Solve them in order in \`Day${nn}.java\`, then run \`npm run test:java\`.

| # | Method | Returns |
|---|--------|---------|
| Q1 | \`example(int n)\` | \`int\` |
`,
  [`${dir}/java/Day${nn}.java`]: `// Day ${n} · Java · ${javaTopic}
// Replace each \`throw new UnsupportedOperationException("TODO");\` with your code.
// Solve them in order. Run \`npm run test:java\` to check.

public class Day${nn} {

    // Q1. Describe the question here.
    // example(2) -> 4
    static int example(int n) {
        throw new UnsupportedOperationException("TODO");
    }

    public static void main(String[] args) {
    }
}
`,
  [`${dir}/java/Day${nn}Test.java`]: `public class Day${nn}Test {
    public static void main(String[] args) {
        Check.eq("example(2)", () -> Day${nn}.example(2), 4);
        Check.done();
    }
}
`,
};

mkdirSync(`${dir}/javascript`, { recursive: true });
mkdirSync(`${dir}/java`, { recursive: true });
for (const [path, text] of Object.entries(files)) writeFileSync(path, text);
console.log(`Created ${dir}:`);
Object.keys(files).forEach((p) => console.log("  " + p));
console.log("Write the concepts in the READMEs, replace the example question, then add a row to PROGRESS.md.");
