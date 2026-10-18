# JS for DSA · Day 3 · functions, scope and helpers

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

### Two ways to write a function

```js
function square(x) {          // function declaration
  return x * x;
}

const cube = (x) => x * x * x;          // arrow function, one line: returns automatically
const half = (x) => { return x / 2; };  // arrow with { }: you must write return
```

Both work the same for everything in this track. Arrows are handy for short helpers and callbacks.

### Parameters and default values

```js
function greet(name, greeting = "Hello") {
  return greeting + ", " + name;
}
greet("Ankit");          // "Hello, Ankit"   (greeting was left out, so the default is used)
greet("Ankit", "Hi");    // "Hi, Ankit"
```

### Early return

`return` leaves the function **immediately**. Handle the easy cases first, then the main work:

```js
function safeDivide(a, b) {
  if (b === 0) return 0;   // edge case: done, nothing below runs
  return a / b;
}
```

### Scope: `let` and `const` live inside their `{ }`

```js
if (true) {
  const msg = "inside";
}
console.log(msg);   // ReferenceError: msg only exists inside the { }
```

Use `const` by default, `let` when the value changes. Avoid `var`: it ignores `{ }` blocks and leaks out of loops.

### Pure functions vs functions that change their input

```js
function doubledCopy(arr) {        // pure: builds a new array, arr is untouched
  const out = [];
  for (const v of arr) out.push(v * 2);
  return out;
}
function doubleInPlace(arr) {      // mutates: the caller's array changes!
  for (let i = 0; i < arr.length; i++) arr[i] *= 2;
}
```

Both are useful in DSA, but you must **know which one you wrote**. A function that changes its input by surprise is a classic bug.

### Functions are values

You can store a function in a variable and pass it to another function:

```js
const isEven = (v) => v % 2 === 0;
function test(fn, x) { return fn(x); }
test(isEven, 4);   // true
```

This is how sort comparators work (Day 9): `arr.sort((a, b) => a - b)`.

### The call stack

When a function calls another, the first one **waits**. JS keeps a stack of waiting calls: a new call goes on top, and a `return` takes it off. The newest call always finishes first.

## DSA connection

Big problems are solved by small helpers that each do one job: `isPerfect` is one line once `sumOfProperDivisors` exists. In interviews you will write `isValid`, `swap` and `inBounds` helpers all the time. The call stack is also the key to **recursion** (Day 10): a function that calls itself just puts more copies of itself on the stack.

## Questions

Solve them in order in [`questions.js`](questions.js), then run `npm test`. Each stub has **Steps** comments: try without them first.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `max2(a, b)` | the bigger one (as an arrow function) |
| Q2 | `max3(a, b, c)` | the biggest, using Q1 |
| Q3 | `clamp(x, lo, hi)` | x kept inside lo..hi |
| Q4 | `power(base, exp = 2)` | base to the power exp, with a loop |
| Q5 | `sumOfProperDivisors(n)` | sum of divisors smaller than n |
| Q6 | `isPerfect(n)` | true for `6` and `28`, using Q5 |
| Q7 | `applyN(fn, x, n)` | fn applied to x, n times |
| Q8 | `countWhere(arr, testFn)` | how many items pass the test |
