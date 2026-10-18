# JS for DSA · Day 1 · numbers, operators and digits

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

### Arithmetic operators

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `+ - *` | add, subtract, multiply | `7 * 3` | `21` |
| `/` | divide (**always** gives decimals) | `7 / 2` | `3.5` |
| `%` | remainder | `7 % 2` | `1` |
| `**` | power | `2 ** 5` | `32` |

JavaScript has no integer division. To get "how many whole times", divide and drop the decimals:

```js
Math.floor(7 / 2);   // 3
Math.trunc(-7 / 2);  // -3  (trunc cuts toward 0, floor goes down to -4)
```

### The digit-extraction pattern

`% 10` gives the **last digit**. `Math.floor(n / 10)` **removes** the last digit. Repeat until `n` is 0 and you visit every digit, right to left:

```js
let n = 472;
while (n > 0) {
  const digit = n % 10;      // 2, then 7, then 4
  n = Math.floor(n / 10);    // 47, then 4, then 0
}
```

This one loop solves most of today's questions.

### Comparing: always `===`

`===` checks value **and** type. `==` converts types first and surprises you:

```js
5 === "5";   // false
5 == "5";    // true  (avoid ==)
```

### Number gotchas you will meet in DSA

```js
0.1 + 0.2 === 0.3;   // false! decimals are stored approximately
Infinity > 1e300;    // true: a handy starting value when looking for a minimum
-Infinity;           // a handy starting value when looking for a maximum
Number.isInteger(4); // true
```

## DSA connection

Digits are the first "loop until the problem is empty" pattern. The number of steps is the number of digits, so a number with *d* digits takes *d* steps, and *d* is about log₁₀(n). That is your first taste of **O(log n)**: the input shrinks by 10× every step.

## Questions

Solve them in order in [`questions.js`](questions.js), then run `npm test`. Each stub has **Steps** comments: try without them first.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `lastDigit(n)` | the last digit |
| Q2 | `removeLastDigit(n)` | n without its last digit |
| Q3 | `countDigits(n)` | how many digits |
| Q4 | `sumOfDigits(n)` | the sum of the digits |
| Q5 | `reverseNumber(n)` | the digits reversed: `120` → `21` |
| Q6 | `isPalindromeNumber(n)` | true for `121`, using Q5 |
| Q7 | `isArmstrong(n)` | true for `153`, using Q3 |
| Q8 | `gcd(a, b)` | greatest common divisor (Euclid) |
