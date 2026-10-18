# DSA · Day 7 · insertion sort, stability and sorting by keys

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

### Insertion sort: shift, don't swap

Think of sorting playing cards in your hand. The left part is already sorted. Take the next card (`key`), slide every bigger card one slot to the right, and drop `key` into the hole.

```js
for (let i = 1; i < arr.length; i++) {
  const key = arr[i];               // lift the card out
  let j = i - 1;
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];            // shift, one write (a swap is three)
    j--;
  }
  arr[j + 1] = key;                 // drop it in the hole
}
```

Invariant: before each `i`, `arr[0..i-1]` is sorted.

- **Already sorted:** the while loop never runs, so it is **O(n)**. Nearly sorted data is nearly O(n).
- **Reverse sorted:** every key shifts all the way to the front: 1 + 2 + … + (n-1) = n(n-1)/2 shifts, **O(n²)**.
- The number of shifts equals the number of pairs that are in the wrong order (inversions).

### Stable vs unstable

A sort is **stable** if items with equal keys stay in the order they came in. Sort `[3a, 1, 3b]` by number: stable gives `[1, 3a, 3b]`, unstable might give `[1, 3b, 3a]`.

Insertion sort is stable because it shifts only while `arr[j] > key` (strictly). With `>=`, equal items would jump over each other. Bubble sort is stable too; selection sort (Day 6) is **not**: its long-distance swap can carry an item past its twin. JavaScript's `arr.sort` is stable (guaranteed since 2019).

Stability matters when you sort by one key after another, or when the input order means something (e.g. who signed up first).

### Comparators with several keys

```js
people.slice().sort((a, b) => {
  if (a.age !== b.age) return a.age - b.age;   // first key
  return a.name.localeCompare(b.name);          // tie-break: second key
});
```

`localeCompare` returns a negative number, 0 or a positive number, like `a - b` does for numbers. Copy first: `sort` changes the array it is called on.

### Counting sort: no comparisons at all

When the values are small whole numbers (0 to `maxValue`), count them, then write them back out in order:

```js
const counts = new Array(maxValue + 1).fill(0);
for (const v of arr) counts[v]++;
// then write v, counts[v] times, for v = 0, 1, 2, ...
```

Comparison sorts can't beat O(n log n). Counting sort is O(n + k) because it never compares two items, but it only works when the range k is small.

## Complexity

| Algorithm | Best | Worst | Extra space | Stable? |
|-----------|------|-------|-------------|---------|
| insertion sort | O(n) (sorted) | O(n²) (reverse sorted) | O(1) | yes |
| insert one item into a sorted array | O(1) | O(n) | O(1) in place | yes |
| `arr.sort(cmp)` | O(n log n) | O(n log n) | O(n) | yes |
| counting sort (values 0..k-1) | O(n + k) | O(n + k) | O(k) | yes, done carefully |
| 0/1/2 by counting | O(n) | O(n) | O(1) | n/a (just numbers) |

## DSA connection

Insertion sort is the sort of choice for small or nearly sorted arrays: real libraries switch to it for pieces of fewer than about 16 items. Multi-key comparators show up in "sort intervals by start, then end", "sort by frequency, then value" and "custom sort string" problems. Counting is the idea behind bucket sort and radix sort, and "sort colors" (0/1/2) is a classic interview question you will solve again in one pass on Day 9.

## Questions

Solve them in order in [`questions.js`](questions.js). **No `.sort()` today, except in Q4 and Q5.**

| # | Function | Returns |
|---|----------|---------|
| Q1 | `insertInSorted(sorted, x)` | a new sorted array with x in its place |
| Q2 | `insertionSort(arr)` | arr, sorted in place |
| Q3 | `insertionShifts(arr)` | how many shifts insertion sort makes |
| Q4 | `sortByAgeThenName(people)` | people by age, then name (`.sort` allowed) |
| Q5 | `sortStringsByLengthThenAlpha(words)` | words by length, then A to Z (`.sort` allowed) |
| Q6 | `sortStableByKey(items)` | items by score, ties in input order (insertion sort) |
| Q7 | `sortZeroOneTwo(arr)` | arr of 0/1/2 sorted in place, O(n) |
| Q8 | `countingSort(arr, maxValue)` | `{ counts, sorted }` |

Stuck for 10 minutes? Re-watch the animation for that idea in concept.html, then read the Steps again.

Run `./check.sh dsa 7`
