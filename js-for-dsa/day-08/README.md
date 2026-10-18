# JS for DSA · Day 8 · Map and Set

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

### Set: a bag of values with no duplicates

```js
const seen = new Set();
seen.add(3);
seen.add(3);        // already there: nothing changes
seen.has(3);        // true
seen.size;          // 1
seen.delete(3);     // removes it
```

The classic one-liner to remove duplicates (order of first appearance is kept):

```js
[...new Set([3, 1, 3, 2])];   // [3, 1, 2]
```

### Map: key -> value, with any key type

```js
const age = new Map();
age.set("ankit", 20);
age.get("ankit");    // 20
age.get("ravi");     // undefined
age.has("ankit");    // true
age.set(7, "seven"); // number keys stay numbers (an object would turn 7 into "7")
```

The counting idiom, Map version:

```js
count.set(x, (count.get(x) || 0) + 1);
```

### Looping

Both remember **insertion order**, and `for...of` walks them in that order:

```js
for (const value of seen) { ... }
for (const [key, value] of age) { ... }
```

### Map/Set vs object/array

| You want | Use | Why |
|----------|-----|-----|
| "have I seen x?" | `Set` | `set.has(x)` is O(1); `arr.includes(x)` is O(n) |
| count or remember something per key | `Map` (or an object) | any key type, `.size`, keeps order |
| a list in order, with indexes | array | |

Remember: `check` in the tests compares plain values, so turn a Set back into an array with `[...set]` before returning.

## DSA connection

Most "find the duplicate", "have I seen this?" and "count things" problems become O(n) with a Set or Map: one pass, and each lookup is O(1). With an array and `includes` inside a loop, the same idea is O(n²). The sliding window in Q8 (grow on the right, shrink on the left, a Set for what's inside) is one of the most common interview patterns.

## Questions

Solve them in order in [`questions.js`](questions.js), then run `./check.sh 8`. Each stub has **Steps** comments: try without them first.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `unique(arr)` | the array without duplicates, first-seen order |
| Q2 | `hasDuplicate(arr)` | true if some value repeats |
| Q3 | `countDistinct(arr)` | how many different values |
| Q4 | `intersection(a, b)` | values in both, unique, in a's order |
| Q5 | `firstRepeated(arr)` | the first value seen twice, or `null` |
| Q6 | `mostCommon(arr)` | the most frequent value (tie: first seen), or `null` |
| Q7 | `missingNumber(arr, n)` | the one number from 1..n that is missing |
| Q8 | `longestUniqueSubstring(s)` | length of the longest piece with no repeated character |
