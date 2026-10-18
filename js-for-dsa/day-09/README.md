# JS for DSA · Day 9 · sorting, array methods and sliding window

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

### map, filter, reduce (and the loop each one replaces)

```js
// map: a new array, one output per input
const doubled = arr.map((x) => x * 2);
// same as:  const doubled = []; for (const x of arr) doubled.push(x * 2);

// filter: a new array with only the items where you return true
const big = arr.filter((x) => x > 10);
// same as:  const big = []; for (const x of arr) if (x > 10) big.push(x);

// reduce: boil the array down to one value
const sum = arr.reduce((acc, x) => acc + x, 0);
// same as:  let sum = 0; for (const x of arr) sum = sum + x;
```

None of them change `arr`. They are still loops inside, so each is O(n).

### The sort gotcha

```js
[10, 9, 1].sort();                  // [1, 10, 9]  !! compared as text
[10, 9, 1].sort((a, b) => a - b);   // [1, 9, 10]  ascending
[10, 9, 1].sort((a, b) => b - a);   // [10, 9, 1]  descending
```

The comparator answers "who goes first?": a negative result puts `a` first, a positive result puts `b` first, 0 keeps their order.

### sort changes the array

```js
const sorted = [...arr].sort((a, b) => a - b);   // copy first, arr stays the same
```

### slice vs splice

```js
const a = [10, 20, 30, 40];
a.slice(1, 3);    // [20, 30]  a copy of a piece; a is unchanged
a.splice(1, 2);   // [20, 30]  REMOVES them; a is now [10, 40]
```

### Fixed-size sliding window

To look at every group of k neighbours, don't re-add all k numbers each time. Slide: add the number entering on the right, subtract the one leaving on the left.

```js
sum += arr[right];
sum -= arr[right - k];
```

## DSA connection

Sorting costs O(n log n), and it often makes a problem easy: the k-th largest is just an index, anagrams become equal strings, duplicates end up next to each other. The sliding window turns "check every group of k" from O(n·k) into O(n).

## Questions

Solve them in order in [`questions.js`](questions.js), then run `npm test`. Each stub has **Steps** comments: try without them first.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `squares(arr)` | every number squared (map) |
| Q2 | `onlyEvens(arr)` | only the even numbers (filter) |
| Q3 | `total(arr)` | the sum (reduce) |
| Q4 | `sortNumbers(arr)` | a sorted copy, ascending; input unchanged |
| Q5 | `sortByLength(words)` | words from shortest to longest |
| Q6 | `kthLargest(arr, k)` | the k-th largest number |
| Q7 | `isAnagramBySort(a, b)` | true if same letters, by sorting |
| Q8 | `maxSumWindow(arr, k)` | the biggest sum of k neighbours |
