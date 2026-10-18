# DSA · Day 9 · quick sort and quickselect

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

### Partition: the whole idea

Pick a **pivot**. Rearrange the array so everything smaller than the pivot is on its left and everything else on its right. The pivot is now in its **final sorted place**, forever.

The **Lomuto** scheme (the one every question uses):

```js
function partitionRange(arr, lo, hi) {
  const pivot = arr[hi];            // pivot = the last value
  let i = lo;                       // arr[lo..i-1] is the "small" zone (< pivot)
  for (let j = lo; j < hi; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];   // grow the small zone
      i++;
    }
  }
  [arr[i], arr[hi]] = [arr[hi], arr[i]];     // pivot goes right after the small zone
  return i;                                  // the pivot's final index
}
```

One pass, O(n) time, O(1) extra space.

### Quick sort

```js
function sortRange(arr, lo, hi) {
  if (lo >= hi) return;               // 0 or 1 values: base case
  const p = partitionRange(arr, lo, hi);
  sortRange(arr, lo, p - 1);          // left of the pivot
  sortRange(arr, p + 1, hi);          // right of the pivot
}
```

Merge sort does its work **after** the recursive calls (merge); quick sort does it **before** (partition), and needs no extra array.

### Best, average and worst case

- **Good pivots** split the range roughly in half: log n levels × O(n) partition work per level = **O(n log n)**. On random input this is what happens on average.
- **Bad pivots:** on already sorted input, the last value is always the biggest. One side is empty, the other has n − 1 values: (n−1) + (n−2) + … + 1 = n(n−1)/2 comparisons, **O(n²)**, and the recursion goes n deep.
- Real implementations avoid this by picking a **random** pivot (or the median of three).
- Quick sort is **not stable**: the long-distance swaps jumble equal values.

### Quickselect: the k-th smallest in average O(n)

After one partition, the pivot sits at index `p`, exactly where it would be in the sorted array. If you want sorted index `k - 1`, you only need to look at **one** side:

```
p === k - 1  → found it
p < k - 1    → it's to the right: lo = p + 1
p > k - 1    → it's to the left:  hi = p - 1
```

Average work: n + n/2 + n/4 + … ≈ 2n = **O(n)**. Worst case is still O(n²) with bad pivots.

### Three-way partition (Dutch national flag)

For arrays with only a few distinct values (0, 1, 2): three pointers `low`, `mid`, `high` sort it in one pass, in place. Invariant: `[0..low-1]` = 0s, `[low..mid-1]` = 1s, `[mid..high]` = unknown, `[high+1..]` = 2s.

## Complexity

| Algorithm | Best / average | Worst | Extra space | Stable? |
|-----------|----------------|-------|-------------|---------|
| Lomuto partition | O(n) | O(n) | O(1) | no |
| quick sort | O(n log n) | O(n²) (sorted input, last pivot) | O(log n) stack, O(n) worst | no |
| quickselect (k-th smallest) | O(n) | O(n²) | O(1) | n/a |
| stable partition with two arrays | O(n) | O(n) | O(n) | yes |
| Dutch flag (0/1/2) | O(n), one pass | O(n) | O(1) | n/a |
| sort by frequency (Map + sort) | O(n log n) | O(n log n) | O(n) | n/a |

## DSA connection

Partitioning is everywhere: "move zeros", "segregate even and odd", "sort colors" (Dutch flag) and "partition around a value" are all one partition pass. Quickselect is the standard answer to "k-th largest element" and "top k" when you don't need a heap. And "why is quick sort O(n²) on sorted input?" is a favourite interview question.

## Questions

Solve them in order in [`questions.js`](questions.js). **No `.sort()` today, except in Q8.** Every question uses the Lomuto partition exactly as written at the top of the file.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `partition(arr)` | `{ pivotIndex, result }` after one Lomuto partition |
| Q2 | `quickSort(arr)` | arr, sorted in place |
| Q3 | `quickSortCompareCount(arr)` | how many `arr[j] < pivot` comparisons quick sort makes |
| Q4 | `partitionAroundValue(arr, x)` | values < x, then values >= x, both in input order |
| Q5 | `kthSmallest(arr, k)` | the k-th smallest value (quickselect) |
| Q6 | `dutchFlag(arr)` | arr of 0/1/2 sorted in one pass |
| Q7 | `topKLargest(arr, k)` | the k largest, biggest first |
| Q8 | `sortedByFrequency(arr)` | values by frequency, then value (Map + sort allowed) |

Stuck for 10 minutes? Re-watch the animation for that idea in concept.html, then read the Steps again.

Run `./check.sh dsa 9`
