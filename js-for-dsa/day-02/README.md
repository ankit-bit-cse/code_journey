# JS for DSA · Day 2 · loops and counting steps

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

### Two loops: `for` and `while`

Use `for` when you know how many rounds. Use `while` when you loop "until something happens".

```js
for (let i = 1; i <= 3; i++) {   // start; keep going while; after each round
  console.log(i);                // 1, 2, 3
}

let n = 40;
while (n > 1) {                  // we don't know how many rounds in advance
  n = Math.floor(n / 2);
}
```

### The accumulator pattern

Make a variable **before** the loop, update it **inside**, use it **after**:

```js
let sum = 0;                     // before: the empty answer
for (let i = 1; i <= 4; i++) {
  sum += i;                      // inside: 1, 3, 6, 10
}
sum;                             // after: 10
```

For a product, start at `1`, not `0`. For a string, start at `""`. For a list, start at `[]`.

### `break` and `continue`

```js
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) continue;     // skip the rest of THIS round
  if (i > 7) break;              // leave the loop completely
  console.log(i);                // 1, 2, 4, 5, 7
}
```

### Nested loops

A loop inside a loop. The inner loop runs **completely** for each round of the outer one:

```js
for (let i = 0; i < 3; i++) {
  for (let j = i + 1; j < 3; j++) {
    console.log(i, j);           // 0 1, 0 2, 1 2: every pair once
  }
}
```

### Trace by hand

When a loop confuses you, make a table: one row per round, one column per variable. Write the values **before** the body runs, then after. This is exactly what the animations in `concept.html` do.

## DSA connection

Count how many times the loop body runs, as a function of n:

| Loop | Body runs | Name |
|------|-----------|------|
| `for (i = 1; i <= n; i++)` | n times | O(n) |
| two nested loops over n | about n × n | O(n²) |
| `for (i = 2; i * i <= n; i++)` | about √n | O(√n) |
| halving `n` each round (Day 1) | about log₂ n | O(log n) |

For n = 1,000,000: O(n²) is a trillion steps (too slow), O(n) is a million (fine), O(√n) is a thousand (instant). Choosing the loop is choosing the speed.

## Questions

Solve them in order in [`questions.js`](questions.js), then run `npm test`. Each stub has **Steps** comments: try without them first.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `sumTo(n)` | 1 + 2 + ... + n |
| Q2 | `factorial(n)` | n!, with `0!` = 1 |
| Q3 | `fibonacci(n)` | the nth Fibonacci number, iteratively |
| Q4 | `firstDivisor(n)` | the smallest divisor > 1, using `break` |
| Q5 | `sumSkipping3(n)` | sum of 1..n without multiples of 3, using `continue` |
| Q6 | `countPairs(n)` | how many pairs i < j below n (nested loops) |
| Q7 | `starRows(n)` | `["*", "**", "***"]` for n = 3 |
| Q8 | `isPrime(n)` | true for primes, checking only up to √n |
