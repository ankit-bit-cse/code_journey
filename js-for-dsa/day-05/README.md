# JS for DSA · Day 5 · arrays in place: swap and two pointers

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

### Mutate vs build a new array

A function can **change the array it was given** (in place), or **build a new one** and leave the input alone. Both are fine, but you must know which one you wrote:

```js
function doubleInPlace(arr) {          // changes arr
  for (let i = 0; i < arr.length; i++) arr[i] = arr[i] * 2;
  return arr;
}
function doubled(arr) {                // arr is untouched
  const out = [];
  for (const x of arr) out.push(x * 2);
  return out;
}
```

In place uses no extra memory: **O(1) extra space**. Interviewers often ask for exactly that.

### Swapping two values

You need a temporary variable, or the first value is lost:

```js
const temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;

[arr[i], arr[j]] = [arr[j], arr[i]];   // same thing, one line (destructuring)
```

### Two pointers from both ends

Start `left` at the first index and `right` at the last. Do something with both, then move them toward each other. Stop when they meet.

```js
let left = 0, right = arr.length - 1;
while (left < right) {
  // look at arr[left] and arr[right]
  left++;
  right--;
}
```

Each step handles two elements, so the whole array takes about n / 2 steps.

### Read and write pointers

`read` visits every element. `write` only moves when you **keep** something. Everything before `write` is the finished part:

```js
let write = 0;
for (let read = 0; read < arr.length; read++) {
  if (keep(arr[read])) {
    arr[write] = arr[read];
    write++;
  }
}
// arr[0 .. write-1] holds the kept values, in order
```

### Merging two sorted arrays

Keep one pointer in each array. Always take the smaller front value, then move that pointer. When one array runs out, copy the rest of the other.

## DSA connection

Two pointers turn many O(n²) "try every pair" problems into **O(n)** single passes. On a sorted array, pair sums, removing duplicates and merging all use it. Merging is also the heart of **merge sort**, and the "three reverses" trick (Q8) shows up again and again.

## Questions

Solve them in order in [`questions.js`](questions.js), then run `./check.sh 5`. Each stub has **Steps** comments: try without them first.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `swap(arr, i, j)` | arr, with two values swapped |
| Q2 | `reverseInPlace(arr)` | arr, reversed in place |
| Q3 | `isPalindromeArray(arr)` | true for `[1, 2, 1]` |
| Q4 | `moveZerosToEnd(arr)` | arr, zeros at the end, others in order |
| Q5 | `countUniqueSorted(arr)` | k, the number of different values |
| Q6 | `pairWithSum(sorted, target)` | `[i, j]` or `null` |
| Q7 | `mergeSorted(a, b)` | one new sorted array |
| Q8 | `rotateRight(arr, k)` | arr, rotated right by k |
