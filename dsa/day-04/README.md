# DSA · Day 4 · recursion on arrays and strings

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

### Slicing hides a loop

In JS for DSA you summed an array with `arr[0] + sum(arr.slice(1))`. It works, but every `slice` **copies** the rest of the array. For n elements that is n + (n-1) + ... + 1 copied values: **O(n²) time**, and all those copies are alive at once on the stack.

### Pass an index instead

Keep the one array and move an index along it. A default parameter means the caller doesn't need to know about it:

```js
function sumFrom(arr, i = 0) {
  if (i === arr.length) return 0;        // base case: nothing left
  return arr[i] + sumFrom(arr, i + 1);   // this element + the rest
}
sumFrom([4, 7, 1, 6]);   // 18
```

"The rest of the array" is now just `i + 1`: no copy, O(1) work per call, **O(n) time**. The stack still holds n calls, so it uses **O(n) space**.

### Helpers with extra parameters

When the recursion needs more state than the question's signature gives you (an index, a running string, an output array), write a **helper** inside the function and let it carry the extra parameters:

```js
function evensOf(arr) {
  const out = [];
  function helper(i) {
    if (i === arr.length) return;
    if (arr[i] % 2 === 0) out.push(arr[i]);
    helper(i + 1);
  }
  helper(0);
  return out;
}
```

### Nested arrays: across with a loop, down with recursion

`[1, [2, [3]], 4]` is a little **tree**: an array can hold arrays. A loop walks across one level; when an item is itself an array (`Array.isArray(item)`), a recursive call walks down into it. The base case is hidden: an array with no arrays inside simply makes no more calls.

### Take or skip: recursion that builds results

To list every subsequence (or subset), make one decision per element: **take it** or **skip it**. Each call makes two calls, so n elements give 2ⁿ results. Always try the branches in the same order and the results come out in a fixed order.

### Gotchas

- Forgetting `i + 1` (calling `f(arr, i)` again) recurses forever: `Maximum call stack size exceeded`.
- Forgetting `return` before the recursive call gives `undefined` back to the caller.
- Default parameters only apply when the argument is missing, so `maxRec(arr)` starts at 0 but `maxRec(arr, 2)` starts at 2.

## Complexity

| Operation | Time | Extra space |
|-----------|------|-------------|
| recursion with `slice(1)` each call | O(n²) | O(n²) copies |
| recursion with an index `i + 1` | O(n) | O(n) call stack |
| sum / flatten a nested array with N numbers in total | O(N + number of arrays) | O(depth) stack (+ O(N) output) |
| all subsequences of a string of length n | O(2ⁿ · n) | O(n) stack + the output |
| grid paths, right/down, plain recursion | about O(2^(r+c)) | O(r + c) stack |

## Questions

Solve them in order in [`questions.js`](questions.js). No loops unless a question says so, and no `.slice()`, `.flat()` or `.reduce()` today.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `maxRec(arr, i = 0)` | the largest value from index i on |
| Q2 | `isSortedRec(arr, i = 0)` | true if it never goes down |
| Q3 | `linearSearchRec(arr, x, i = 0)` | the first index of x from i on, or -1 |
| Q4 | `removeCharRec(s, ch, i = 0)` | s without any ch |
| Q5 | `sumNested(nested)` | the sum of every number, at any depth |
| Q6 | `flatten(nested)` | one flat array, left to right |
| Q7 | `countPathsInGridRec(r, c)` | how many right/down paths cross an r × c grid |
| Q8 | `subsequences(s)` | every subsequence, "take" before "skip" |

Stuck for 10 minutes? Re-watch the animation for that idea in concept.html, then read the Steps again.

Run `./check.sh dsa 4`
