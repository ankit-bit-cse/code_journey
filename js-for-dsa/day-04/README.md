# JS for DSA · Day 4 · arrays: traversal and linear search

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

### Making and reading an array

```js
const a = [7, 3, 9];
a[0];              // 7: indexes start at 0
a.length;          // 3
a[a.length - 1];   // 9: the last element
a[5];              // undefined: no error, so be careful!
a[1] = 4;          // a is now [7, 4, 9] (const stops re-assigning a, not changing its boxes)
```

### Adding and removing

```js
a.push(5);     // add at the end        fast: O(1)
a.pop();       // remove from the end   fast: O(1)
a.unshift(1);  // add at the front      slow: O(n), every element shifts right
a.shift();     // remove from the front slow: O(n), every element shifts left
```

### Two ways to loop

```js
for (let i = 0; i < a.length; i++) {   // use when you need the index i
  console.log(i, a[i]);
}
for (const x of a) {                   // use when you only need the values
  console.log(x);
}
```

### Linear search: write it yourself

```js
function firstNegative(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) return i;   // found: stop right away
  }
  return -1;                    // looked at everything, not found
}
```

`includes` and `indexOf` do exactly this loop for you. Today you write the loop, so you know what they cost.

### Arrays are references

```js
const a = [1, 2, 3];
const b = a;        // b is NOT a copy: a and b are two names for one array
b[0] = 99;
a;                  // [99, 2, 3]  surprise!

const c = [...a];   // a real copy (a.slice() works too)
c[0] = 0;
a;                  // still [99, 2, 3]
```

## DSA connection

A linear search looks at each element once, so it costs **O(n)**: twice the array, twice the work. That is fine once, but a linear search inside a loop over the same array is O(n²). Later you will beat it with sorted arrays + binary search (Day 10) and with Sets and Maps (Day 8). Also remember: `push`/`pop` are O(1), but `shift`/`unshift` are O(n), so a loop that `shift`s every element is secretly O(n²).

## Questions

Solve them in order in [`questions.js`](questions.js), then run `npm test`. Each stub has **Steps** comments: try without them first.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `sumArray(arr)` | the total |
| Q2 | `average(arr)` | the mean, `0` for an empty array |
| Q3 | `indexOfMin(arr)` | index of the smallest, `-1` if empty |
| Q4 | `linearSearch(arr, target)` | first index of target, or `-1` |
| Q5 | `countOccurrences(arr, target)` | how many times target appears |
| Q6 | `secondLargest(arr)` | second biggest different value, or `null` |
| Q7 | `prefixSums(arr)` | running totals: `[1, 2, 3]` → `[1, 3, 6]` |
| Q8 | `isSorted(arr)` | true if never decreasing |
