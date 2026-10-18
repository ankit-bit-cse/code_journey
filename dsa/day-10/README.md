# DSA · Day 10 · binary search templates

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

JS for DSA Day 10 gave you one binary search: find `x`, or say `-1`. Today is about writing **any** binary search without off-by-one bugs. The trick is to decide what `lo` and `hi` *mean* before you write the loop, and keep that true every step (the **invariant**).

### Two templates

| | closed range `[lo, hi]` | half-open range `[lo, hi)` |
|---|---|---|
| start | `lo = 0, hi = n - 1` | `lo = 0, hi = n` |
| loop | `while (lo <= hi)` | `while (lo < hi)` |
| moves | `lo = mid + 1` or `hi = mid - 1` | `lo = mid + 1` or `hi = mid` |
| ends when | `lo === hi + 1` (empty range) | `lo === hi` (one answer left) |
| use it for | "find x", "best answer so far" (`ans`) | lower bound, upper bound, "first index where ..." |

```js
// lower bound: first index with arr[i] >= x (or n)
let lo = 0, hi = arr.length;
while (lo < hi) {
  const mid = Math.floor((lo + hi) / 2);
  if (arr[mid] >= x) hi = mid;   // mid could be the answer: keep it
  else lo = mid + 1;             // mid is too small: drop it
}
return lo;
```

**Upper bound** (first index with `arr[i] > x`) is the same code with `>` instead of `>=`. Together they give you:

- first `x`: `lowerBound(x)`, if that index really holds `x`
- last `x`: `upperBound(x) - 1`, if that index really holds `x`
- how many `x`: `upperBound(x) - lowerBound(x)`, in O(log n)

### The "remember the best so far" form

When you want "the largest element <= x" (floor) or "the first x", use the closed template and keep `ans`: when `mid` is a possible answer, save it and keep searching the side where a better one could be.

### mid without overflow

`Math.floor((lo + hi) / 2)` is safe in JavaScript (numbers are exact up to 2⁵³). In Java or C++, `lo + hi` can overflow an `int`, so you'll see `lo + Math.floor((hi - lo) / 2)`. It gives the same `mid`. Avoid `(lo + hi) >> 1` on huge numbers: `>>` works on 32-bit integers.

### Off-by-one bugs to watch for

- `while (lo < hi)` with `hi = n - 1` and `hi = mid - 1`: misses the last candidate.
- `lo = mid` (instead of `mid + 1`) with `while (lo < hi)`: when `hi === lo + 1`, `mid === lo` and the loop never ends.
- forgetting that a lower bound can be `n` (off the end): check before reading `arr[i]`.

## Complexity

| Operation | Time | Space |
|-----------|------|-------|
| classic binary search | O(log n) | O(1) |
| lower bound / upper bound | O(log n) | O(1) |
| first / last occurrence | O(log n) | O(1) |
| count of x (two bounds) | O(log n) | O(1) |
| count of x by scanning (what we avoid) | O(n) | O(1) |

## DSA connection

Lower and upper bounds are the building blocks of every later binary search: rotated arrays (Day 11), binary search on the answer (Day 12), "insert into a sorted list", range counting, and the `bisect` / `lower_bound` functions other languages have built in.

## Questions

Solve them in order in [`questions.js`](questions.js). Every answer is a binary search: no `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex` or `filter`, and no loop over every item.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `binarySearchSteps(arr, x)` | the list of mid indices the classic search looked at |
| Q2 | `lowerBound(arr, x)` | the first index with `arr[i] >= x`, or `arr.length` |
| Q3 | `upperBound(arr, x)` | the first index with `arr[i] > x`, or `arr.length` |
| Q4 | `firstOccurrence(arr, x)` | the index of the first `x`, or -1 |
| Q5 | `lastOccurrence(arr, x)` | the index of the last `x`, or -1 |
| Q6 | `countOccurrences(arr, x)` | how many times `x` appears, in O(log n) |
| Q7 | `searchInsertPosition(arr, x)` | the index of `x`, or where it would go (closed template) |
| Q8 | `floorInSorted(arr, x)` | the largest element <= `x`, or `null` |

Stuck for 10 minutes? Re-watch the animation for that idea in concept.html, then read the Steps again.

Run `./check.sh dsa 10`
