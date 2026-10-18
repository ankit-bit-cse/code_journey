# DSA · Day 2 · space complexity and the cost of built-ins

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

### Space complexity

Count the **extra** memory, on top of the input, as the input grows. A few variables: **O(1)**. A new array, Set, Map or string that grows with the input: **O(n)**. An n × n table: **O(n²)**.

**In place** means changing the input itself (two pointers, read/write pointers) instead of building a copy: `[...arr].reverse()` is O(n) extra space, swapping the ends inward is O(1). In place changes the caller's array, so only do it when asked.

### Best, worst and average case

Linear search: best 1 comparison (x is first), worst n (x is last or missing), average about n / 2. "O(n)" means the worst case unless someone says otherwise.

### What built-ins cost

| Operation | Time |
|-----------|------|
| `arr[i]`, `arr.length`, `push`, `pop` | O(1) (push: amortized) |
| `shift`, `unshift`, `splice` | O(n): items move |
| `includes`, `indexOf`, `find` | O(n): a linear search |
| `slice(a, b)` | O(b − a) |
| `[...arr]`, `concat`, `map`, `filter` | O(n) time and O(n) space |
| `sort` | O(n log n) |
| `set.has / add`, `map.get / set` | O(1) on average |

**A hidden loop inside a loop is O(n²)**: `includes`, `shift`, `splice` or `slice` inside a loop. Swap `includes` for a `Set` and the loop is O(n) again.

**Amortized O(1) push:** when an array runs out of room it copies itself into a block twice as big. Copies of 1 + 2 + 4 + ... add up to less than n, so n pushes cost O(n) in total. Strings don't work like that: `s += ch` in a loop can be O(n²), so push pieces into an array and `join("")` once.

### Prefix sums: spend space to save time

```js
const prefix = [0];                       // prefix[i] = sum of the first i values
for (const x of arr) prefix.push(prefix[prefix.length - 1] + x);
const rangeSum = (l, r) => prefix[r + 1] - prefix[l];   // O(1) per query
```

## Complexity

| Algorithm (today's questions) | Time | Extra space |
|-------------------------------|------|-------------|
| duplicate check with `includes` | O(n²) | O(1) |
| duplicate check with a `Set` | O(n) | O(n) |
| first unique / most frequent with a `Map` (two passes) | O(n) | O(n) |
| subsequence check, two pointers | O(n) | O(1) |
| best stock profit, one pass | O(n) | O(1) |
| prefix sums: build, then q queries | O(n + q) | O(n) |
| merge two sorted arrays, two pointers | O(n + m) | O(n + m) for the output |
| remove duplicates in place, read/write pointers | O(n) | O(1) |

## DSA connection

"And the space?" always follows "what's the time?". The usual trade: a Set or Map buys O(n) time with O(n) space; pointers give O(1) space. Hidden loops in built-ins are the most common reason a correct answer gets *Time Limit Exceeded*.

## Questions

Solve them in order in [`questions.js`](questions.js). Each one is a slow idea made fast. **Not allowed today:** `.sort()` (the tests switch it off in Q7), and `includes`, `indexOf`, `shift`, `unshift` or `splice` inside a loop.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `containsDuplicate(arr)` | true if a value repeats, O(n) with a Set |
| Q2 | `isSubsequence(s, t)` | true if s is t with some letters deleted, O(1) space |
| Q3 | `firstUniqueIndex(arr)` | index of the first value seen exactly once, or -1 |
| Q4 | `mostFrequent(arr)` | the most common value (tie: smallest), or null |
| Q5 | `maxProfit(prices)` | best buy-then-sell profit, one pass |
| Q6 | `rangeSums(arr, queries)` | the sum of each `[l, r]` range, with prefix sums |
| Q7 | `mergeSortedNoSort(a, b)` | one sorted array, O(n + m), no sort |
| Q8 | `removeDuplicatesInPlace(arr)` | k, with the k distinct values moved to the front |

Stuck for 10 minutes? Re-watch the animation for that idea in concept.html, then read the Steps again.

Run `./check.sh dsa 2`
