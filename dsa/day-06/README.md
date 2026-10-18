# DSA · Day 6 · bubble sort and selection sort

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

### Words for sorting

- **comparison**: look at two values and ask which is bigger. We count these to measure a sort.
- **swap**: exchange two values: `[a[i], a[j]] = [a[j], a[i]];`
- **pass**: one walk through (part of) the array.
- **in place**: the sort only swaps inside the array, so it needs O(1) extra space.
- **stable**: equal values keep their original order. It matters when you sort objects by one key.

### Bubble sort

Walk left to right and swap every neighbour pair that is in the wrong order. After one pass the **biggest** value has bubbled to the end. After pass `i` the last `i + 1` places are final, so each pass can stop one place earlier.

```js
for (let i = 0; i < n - 1; i++) {          // n - 1 passes
  for (let j = 0; j < n - 1 - i; j++) {    // skip the finished tail
    if (a[j] > a[j + 1]) [a[j], a[j + 1]] = [a[j + 1], a[j]];
  }
}
```

**Early exit:** if a whole pass makes no swap, the array is sorted: stop. On sorted input that is a single pass, so the best case is O(n). Each swap fixes exactly one pair that was out of order (an **inversion**), so the number of swaps equals the number of inversions.

Bubble sort only swaps neighbours, and only when the left one is strictly bigger, so equal values never jump over each other: it is **stable**.

### Selection sort

Find the smallest value in the unsorted part and swap it to the front of that part. Repeat.

```js
for (let i = 0; i < n - 1; i++) {
  let min = i;
  for (let j = i + 1; j < n; j++) if (a[j] < a[min]) min = j;
  [a[i], a[min]] = [a[min], a[i]];
}
```

Invariant: after step `i`, `a[0..i]` holds the `i + 1` smallest values, in order. It always does all n(n-1)/2 comparisons (even on sorted input), but **at most n - 1 swaps**. The long-distance swap can jump a value over an equal one, so it is **not stable**: `[2a, 2b, 1]` becomes `[1, 2b, 2a]`.

Stopping after k steps gives the k smallest values in about k · n comparisons.

## Complexity

| Algorithm | Best | Average | Worst | Swaps | Extra space | Stable |
|-----------|------|---------|-------|-------|-------------|--------|
| bubble sort | O(n²) | O(n²) | O(n²) | = inversions, up to n(n-1)/2 | O(1) | yes |
| bubble sort, early exit | O(n) (sorted) | O(n²) | O(n²) (reversed) | = inversions | O(1) | yes |
| selection sort | O(n²) | O(n²) | O(n²) | at most n - 1 | O(1) | no |
| first k steps of selection sort | O(k · n) | O(k · n) | O(k · n) | at most k | O(1) | no |

## Questions

Solve them in order in [`questions.js`](questions.js). No `.sort()` today, and never change the input: copy it first, then sort the copy in place.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `bubblePass(arr)` | the array after ONE bubble pass |
| Q2 | `bubbleSort(arr)` | a sorted copy, by bubble sort |
| Q3 | `bubbleSwaps(arr)` | how many swaps bubble sort makes |
| Q4 | `bubbleSortEarlyExit(arr)` | how many passes, stopping after a pass with no swap |
| Q5 | `minIndexFrom(arr, start)` | the index of the smallest value from start on |
| Q6 | `selectionSort(arr)` | a sorted copy, by selection sort |
| Q7 | `selectionSortDesc(arr)` | a copy sorted from big to small |
| Q8 | `kSmallestBySelection(arr, k)` | the k smallest values, from k selection steps |

Stuck for 10 minutes? Re-watch the animation for that idea in concept.html, then read the Steps again.

Run `./check.sh dsa 6`
