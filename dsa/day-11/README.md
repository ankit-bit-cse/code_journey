# DSA · Day 11 · binary search on tricky arrays

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

Binary search doesn't need a perfectly sorted array. It needs a way to look at `mid` and **throw half away for sure**. Today's arrays are not fully sorted, but each one still lets you do that.

### Yes/no questions instead of arrays

"Versions 1..n, find the first bad one" is a lower bound on the answers `good, good, good, bad, bad`. You don't need an array at all, just a function you can ask about any `mid`. That's the bridge to Day 12.

### Rotated sorted arrays

`[4, 5, 6, 7, 0, 1, 2]` is a sorted array that was rotated. Cut it at any `mid` and **at least one half is sorted**:

- `arr[lo] <= arr[mid]`: the left half `[lo..mid]` is sorted.
- otherwise the right half `[mid..hi]` is sorted.

To search for `x`: find the sorted half, check whether `x` lies between its two ends, and go there if it does, otherwise go to the other half.

To find the **minimum**: compare `arr[mid]` with `arr[hi]`. If `arr[mid] > arr[hi]`, the drop is to the right of mid, so `lo = mid + 1`. Otherwise mid..hi is sorted, so the minimum is mid or to its left: `hi = mid`. The index of the minimum is also how many times the array was rotated.

### Peak element

Compare `arr[mid]` with `arr[mid + 1]`. If the next one is bigger, you are walking uphill, and there must be a peak to the right (the climb has to stop somewhere, and outside the array counts as `-Infinity`). Otherwise there is a peak at `mid` or to its left.

### A sorted matrix is a flat array

If each row is sorted and each row starts after the previous one ends, the matrix read row by row is one sorted list of `rows * cols` items. Flat index `k` is the cell `matrix[Math.floor(k / cols)][k % cols]`.

### Unknown size

If you can't ask for the length (a stream, or `get(i)` returning `Infinity` past the end), double `hi` (1, 2, 4, 8, ...) until `get(hi) >= x`, then binary search inside `[hi / 2, hi]`. Both parts are O(log n).

## Complexity

| Operation | Time | Space |
|-----------|------|-------|
| first bad version | O(log n) calls to `isBad` | O(1) |
| search a sorted matrix (rows × cols) | O(log(rows · cols)) | O(1) |
| peak element | O(log n) | O(1) |
| minimum / rotation count in a rotated array | O(log n) | O(1) |
| search in a rotated array | O(log n) | O(1) |
| single element among pairs | O(log n) | O(1) |
| search in a nearly sorted array | O(log n) | O(1) |
| unknown size: doubling, then binary search | O(log n) | O(1) |

## DSA connection

"Search in rotated sorted array", "find minimum in rotated sorted array", "find peak element" and "search a 2D matrix" are some of the most asked binary search interview problems. The bigger lesson: binary search works whenever one look at `mid` can rule out half the possibilities. Tomorrow you'll apply that to the **answer** itself.

## Questions

Solve them in order in [`questions.js`](questions.js). Every answer is O(log n): no loop over the whole array, and no `indexOf`, `includes`, `find`, `findIndex` or `Math.min(...arr)`.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `firstBadVersion(n, isBad)` | the first bad version, calling `isBad` about log₂ n times |
| Q2 | `searchMatrix(matrix, x)` | `true` if x is in the sorted matrix |
| Q3 | `findPeak(arr)` | the index of the (only) peak |
| Q4 | `findMinRotated(arr)` | the smallest value of a rotated sorted array |
| Q5 | `rotationCount(arr)` | how many times the sorted array was rotated |
| Q6 | `searchRotated(arr, x)` | the index of x in a rotated sorted array, or -1 |
| Q7 | `singleNonDuplicate(arr)` | the one number that isn't in a pair |
| Q8 | `searchNearlySorted(arr, x)` | the index of x when items can be one place off, or -1 |

Stuck for 10 minutes? Re-watch the animation for that idea in concept.html, then read the Steps again.

Run `./check.sh dsa 11`
