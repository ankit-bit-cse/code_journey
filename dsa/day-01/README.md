# DSA · Day 1 · time complexity: counting steps

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

### Count how often each line runs

Measure code in **steps**, not seconds. For each line, write how many times it runs for an input of size `n`, then add them up:

```js
let sum = 0;               // 1 time
for (const x of arr) {
  sum += x;                // n times
}
return sum;                // 1 time      total: n + 2
```

When the inner loop depends on the outer one, add the rounds: `n + (n - 1) + ... + 1`. The **Gauss trick** (write the sum forwards and backwards, every column adds to `n + 1`) gives `n(n + 1) / 2`.

### From the exact count to Big-O

1. Keep only the biggest term: `n² + 100n + 7` → `n²`.
2. Drop the constant in front: `2n + 3` → `n`.

So `2n + 3` is O(n), `n(n + 1) / 2` is O(n²), `500` is O(1). Two different inputs keep two letters: O(n + m), O(n · m).

### The shapes

| Code shape | Big-O |
|------------|-------|
| no loop, or a loop to a fixed number | O(1) |
| halve (or double) each step: `m = Math.floor(m / 2)` | O(log n) |
| `for (i = 1; i * i <= n; i++)` | O(√n) |
| loop to n, then another loop to n (**add**) | O(n) |
| loop to n with a halving loop inside (**multiply**) | O(n log n) |
| loop to n with a loop to n inside | O(n²) |
| a function calling itself twice on n − 1 | O(2ⁿ) |

Subtracting a constant (`n -= 2`) is still O(n): only dividing gives log n.

### How fast they grow

| Big-O | n = 10 | n = 100 | n = 10⁶ |
|-------|--------|---------|---------|
| O(log n) | 3 | 7 | 20 |
| O(n) | 10 | 100 | 10⁶ |
| O(n log n) | 33 | 664 | 2 × 10⁷ |
| O(n²) | 100 | 10⁴ | 10¹² |
| O(2ⁿ) | 1,024 | ≈ 10³⁰ | hopeless |

About 10⁸ simple steps per second, so 10¹² steps is hours. A faster laptop never fixes a bad Big-O; a better idea does.

## Complexity

| Algorithm (today's questions) | Time | Space |
|-------------------------------|------|-------|
| sum 1..n with a loop | O(n) | O(1) |
| sum 1..n with Gauss `n(n + 1) / 2` | O(1) | O(1) |
| count divisors trying 1..n | O(n) | O(1) |
| count divisors trying 1..√n in pairs | O(√n) | O(1) |
| pair with a sum, every pair | O(n²) | O(1) |
| pair with a sum in a sorted array, two pointers | O(n) | O(1) |
| halving loop (`stepsHalving`) | O(log n) | O(1) |

## DSA connection

Interview problems give the input size (`n ≤ 10⁵`), and that tells you the Big-O you need: n ≤ 20 allows O(2ⁿ), n ≤ 5,000 allows O(n²), n ≤ 10⁶ needs O(n log n) or O(n), and n ≤ 10⁹ needs O(log n) or a formula.

## Questions

Solve them in order in [`questions.js`](questions.js). Q1–Q5 ask you to **return a step count** for a code shape: work out the formula on paper first. Q6–Q8 are slow-to-fast rewrites.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `stepsSequential(n)` | steps of three loops in a row (they add) |
| Q2 | `stepsNested(n)` | steps of `for i < n, for j < i`: n(n − 1) / 2 |
| Q3 | `stepsHalving(n)` | how many halvings take n down to 1 |
| Q4 | `stepsSqrt(n)` | steps of `for (i = 1; i * i <= n; i++)` |
| Q5 | `stepsLogLinear(n)` | steps of a halving loop inside a loop to n, using Q3 |
| Q6 | `sumTo(n)` | 1 + 2 + ... + n in O(1) |
| Q7 | `countDivisors(n)` | how many divisors, in O(√n) |
| Q8 | `hasPairWithSum(sorted, target)` | true if two positions add to target, in O(n) |

Stuck for 10 minutes? Re-watch the animation for that idea in concept.html, then read the Steps again.

Run `./check.sh dsa 1`
