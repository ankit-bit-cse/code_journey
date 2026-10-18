# DSA · Day 8 · merge sort

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

### Divide and conquer

1. **Divide:** split the problem into smaller pieces of the same kind.
2. **Conquer:** solve each piece recursively (tiny pieces are base cases).
3. **Combine:** build the answer for the whole from the answers for the pieces.

Merge sort: split the array in half, sort each half, **merge** the two sorted halves.

### Merging two sorted arrays in O(n + m)

The smallest value left is always at the front of one of the two arrays, so compare just the two fronts:

```js
function merge(a, b) {
  const out = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) out.push(a[i++]);   // <= : on a tie take from a (stable)
    else out.push(b[j++]);
  }
  while (i < a.length) out.push(a[i++]);  // copy the leftovers
  while (j < b.length) out.push(b[j++]);
  return out;
}
```

### Merge sort

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr.slice();          // base case
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));        // trust the recursion
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);                        // combine
}
```

### Why O(n log n)

Picture the recursion tree. Each level splits every piece in half, so after about **log₂ n levels** every piece has 1 item. On each level the pieces together hold all n items, and merging them all costs **O(n)**. So: log n levels × O(n) per level = **O(n log n)**, in the best, average **and** worst case.

| n | n² (insertion sort, worst) | n log₂ n (merge sort) |
|---|---|---|
| 1,000 | 1,000,000 | ≈ 10,000 |
| 1,000,000 | 10¹² (hours) | ≈ 20,000,000 (a blink) |

Space: the merges need an extra array, **O(n)** extra space (plus O(log n) for the call stack). That's the price: merge sort is not in place.

### Counting inversions while merging

When `right[j]` is taken before `left[i]`, it is smaller than `left[i]` **and every value after it in left** (left is sorted). That's `left.length - i` inversions found in one step, instead of one at a time.

## Complexity

| Operation | Time | Extra space |
|-----------|------|-------------|
| `merge(a, b)` | O(n + m) | O(n + m) for the output |
| merge sort | O(n log n) always | O(n) |
| depth of the recursion tree | ⌈log₂ n⌉ levels | O(log n) call stack |
| merge k sorted arrays one at a time (n each) | O(n k²) | O(nk) |
| sorted squares (two pointers) | O(n) | O(n) output |
| intersection of two sorted arrays | O(n + m) | O(1) besides the output |
| count inversions: brute force / merge sort | O(n²) / O(n log n) | O(1) / O(n) |

## DSA connection

The merge step is a two-pointer pattern you'll reuse everywhere: merge two sorted lists, intersect sorted arrays, sorted squares, "merge intervals". Merge sort is the standard **stable** O(n log n) sort (JavaScript's sort uses TimSort, a merge sort cousin), the natural sort for linked lists, and the template for divide and conquer. Counting inversions ("how far from sorted is this?") is a classic interview question.

## Questions

Solve them in order in [`questions.js`](questions.js). **No `.sort()` today, and never change the input arrays.**

| # | Function | Returns |
|---|----------|---------|
| Q1 | `merge(a, b)` | one sorted array from two sorted arrays |
| Q2 | `mergeSort(arr)` | a new sorted array |
| Q3 | `mergeSortLevels(n)` | the depth of the recursion tree for n items |
| Q4 | `mergeSortDesc(arr)` | a new array sorted descending |
| Q5 | `mergeKSortedArrays(arrays)` | one sorted array from k sorted arrays |
| Q6 | `sortedSquares(sortedArr)` | the squares, sorted, in O(n) |
| Q7 | `intersectionSorted(a, b)` | values in both, each once |
| Q8 | `countInversions(arr)` | the number of pairs i < j with arr[i] > arr[j] |

Stuck for 10 minutes? Re-watch the animation for that idea in concept.html, then read the Steps again.

Run `./check.sh dsa 8`
