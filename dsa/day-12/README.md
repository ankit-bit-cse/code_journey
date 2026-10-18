# DSA · Day 12 · binary search on the answer

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

Some problems ask for a **number**: the smallest speed, the smallest capacity, the biggest distance. Often you can't compute it directly, but you *can* check a guess: "is speed 5 enough?" If the answers to that check line up like

```
speed:      1    2    3    4    5    6    7
enough?     no   no   no   no   yes  yes  yes
```

then the answer is the first "yes", and binary search finds it in O(log range) checks. The check only needs to be **monotonic**: once it says yes, every bigger value also says yes (or the other way round).

### The recipe

1. **What is the answer?** A whole number: a speed, a capacity, a day, a distance.
2. **Range:** the smallest and biggest values it could possibly be: `lo` and `hi`.
3. **The check:** write `canDo(x)` that answers yes/no, usually with one O(n) pass (often greedy).
4. **Monotonic?** Convince yourself that if `x` works, `x + 1` works too (for "smallest") or `x - 1` does (for "largest").
5. **Search** with the "save the answer" template from Day 10:

```js
// smallest x that works                 // largest x that works
let lo = MIN, hi = MAX, ans = -1;        let lo = MIN, hi = MAX, ans = -1;
while (lo <= hi) {                       while (lo <= hi) {
  const mid = Math.floor((lo + hi) / 2);   const mid = Math.floor((lo + hi) / 2);
  if (canDo(mid)) {                        if (canDo(mid)) {
    ans = mid; hi = mid - 1;  // smaller?    ans = mid; lo = mid + 1;  // bigger?
  } else lo = mid + 1;                     } else hi = mid - 1;
}                                        }
```

### Square root, the simplest example

`sqrtFloor(n)` is the largest `r` with `r * r <= n`. The check is just `mid * mid <= n`, the range is `[0, n]`, and you want the last "yes".

## Complexity

| Problem | Range searched | Check | Time | Space |
|---------|----------------|-------|------|-------|
| square root (floor) | 0..n | `mid * mid <= n`, O(1) | O(log n) | O(1) |
| integer k-th root | 0..n | power with a loop, O(k) | O(k log n) | O(1) |
| Koko eating speed | 1..max pile | hours needed, O(n) | O(n log max) | O(1) |
| ship within days | max..sum | days needed, O(n) | O(n log sum) | O(1) |
| smallest divisor | 1..max | sum of ceilings, O(n) | O(n log max) | O(1) |
| bouquets | min..max day | runs of bloomed flowers, O(n) | O(n log max) | O(1) |
| split array, largest sum | max..sum | parts needed, O(n) | O(n log sum) | O(1) |
| aggressive cows | 1..(last - first) | greedy placing, O(n) | O(n log n + n log range) | O(n) for the sorted copy |

## DSA connection

"Minimize the maximum" and "maximize the minimum" are the giveaway phrases: they almost always mean binary search on the answer. It shows up in scheduling, load balancing ("painters' partition", "allocate minimum pages"), and in many medium/hard interview problems. The same idea (a monotonic yes/no question) is also how you'll later binary search inside other algorithms.

## Phase 1 is done

Twelve days: Big-O, recursion, the classic sorts and binary search, deeper. **Phase 2** is array and string patterns: two pointers and sliding windows in depth, prefix sums, hashing patterns, Kadane's algorithm, intervals, and string tricks, each with the interview problems that use them.

## Questions

Solve them in order in [`questions.js`](questions.js). Every question is binary search on the answer: write the `canDo` helper first, test it on the example by hand, then the search. No `Math.sqrt`, `Math.cbrt`, `Math.pow` or `**`. Sorting with a comparator is allowed in Q8 only.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `sqrtFloor(n)` | the largest r with r · r ≤ n |
| Q2 | `nthRootInt(n, k)` | the whole r with rᵏ = n, or -1 |
| Q3 | `minEatingSpeed(piles, h)` | the smallest eating speed that finishes in h hours |
| Q4 | `shipWithinDays(weights, days)` | the smallest ship capacity that ships in time |
| Q5 | `smallestDivisor(nums, threshold)` | the smallest divisor that keeps the rounded-up sum ≤ threshold |
| Q6 | `minDaysForBouquets(bloomDay, m, k)` | the first day m bouquets of k neighbours are possible, or -1 |
| Q7 | `splitArrayLargestSum(nums, k)` | the smallest possible largest part sum over k parts |
| Q8 | `aggressiveCows(stalls, cows)` | the biggest possible smallest distance between cows |

Stuck for 10 minutes? Re-watch the animation for that idea in concept.html, then read the Steps again.

Run `./check.sh dsa 12`
