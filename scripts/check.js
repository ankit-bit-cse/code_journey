// Test helper. You don't need to edit this file.
// A function that still says `throw new Error("TODO")` is SKIPPED, not failed,
// so you can solve the questions one at a time.
import { test } from "node:test";
import assert from "node:assert/strict";

export function check(fn, cases) {
  test(fn.name, (t) => {
    for (const [input, expected] of cases) {
      let got;
      try {
        got = fn(...input);
      } catch (e) {
        if (e.message === "TODO") return t.skip("not solved yet");
        throw e;
      }
      const call = `${fn.name}(${input.map((x) => JSON.stringify(x)).join(", ")})`;
      assert.deepEqual(got, expected, `${call} should return ${JSON.stringify(expected)} but returned ${JSON.stringify(got)}`);
    }
  });
}
