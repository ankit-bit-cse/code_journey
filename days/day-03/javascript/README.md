# Day 3 · JavaScript · functions and return values

## Concept

A **function** is a named piece of code you can run again and again. It takes **parameters** (inputs) and **returns** a value (output).

```js
function add(a, b) {   // a and b are parameters
  return a + b;        // return sends the answer back
}

const total = add(2, 3);   // 2 and 3 are arguments; total is 5
```

### `return` vs `console.log`

`console.log` only **prints**. `return` **gives the value back** so other code can use it.

```js
function double1(n) { console.log(n * 2); }
function double2(n) { return n * 2; }

double1(4) + 1;   // prints 8, then NaN: double1 returned undefined
double2(4) + 1;   // 9
```

The tests check what your function **returns**, so always `return`.

### `return` stops the function

Nothing after a `return` runs. That makes early returns handy:

```js
function isAdult(age) {
  if (age >= 18) {
    return true;
  }
  return false;   // only reached when age < 18
}
```

### Return types

A function can return any type of value. `typeof` tells you which:

| Returns | Example | `typeof` |
|---------|---------|----------|
| number | `return 42;` | `"number"` |
| string | `return "hi";` | `"string"` |
| boolean | `return a > b;` | `"boolean"` |
| array | `return [1, 2];` | `"object"` (arrays are objects in JS) |
| nothing | no `return` | `"undefined"` |

### Calling a function from another function

Small functions that do one job can be combined:

```js
function square(n) { return n * n; }
function sumOfSquares(a, b) { return square(a) + square(b); }
```

## Questions

Solve them in order in `questions.js`, then run `npm test`.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `rectangleArea(w, h)` | number |
| Q2 | `celsiusToFahrenheit(c)` | number: F = C × 9 / 5 + 32 |
| Q3 | `isVowel(ch)` | boolean |
| Q4 | `greet(name)` | string: `"Hello, Riya!"` |
| Q5 | `typeName(value)` | the `typeof` the value, but `"array"` for arrays |
| Q6 | `maxOfArray(arr)` | the biggest number, using a loop |
| Q7 | `countVowels(s)` | number, using your `isVowel` from Q3 |
| Q8 | `isPrime(n)` | boolean |
| Q9 | `primesUpTo(n)` | array of primes, using your `isPrime` from Q8 |
