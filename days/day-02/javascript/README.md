# Day 2 · JavaScript · for loops: doing something many times

## Concept

A `for` loop repeats a block of code. It has three parts, separated by `;`:

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);   // prints 1 2 3 4 5
}
```

| Part | Here | Meaning |
|------|------|---------|
| start | `let i = 1` | runs once, before the loop |
| condition | `i <= 5` | checked before **every** round; the loop stops when it is `false` |
| update | `i++` | runs after every round (`i++` means `i = i + 1`) |

### The counter pattern

To **count** things, start a variable at 0 and add 1 when the condition matches:

```js
let count = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    count++;
  }
}
// count is 5 (2, 4, 6, 8, 10)
```

### The total (sum) pattern

To **add up** things, start a variable at 0 and add each value:

```js
let total = 0;
for (let i = 1; i <= 4; i++) {
  total = total + i;   // or: total += i
}
// total is 10 (1 + 2 + 3 + 4)
```

### Looping over an array

`arr.length` is how many items there are. Indexes start at **0**, so the last one is `arr.length - 1`:

```js
const nums = [4, -2, 7];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);   // 4, then -2, then 7
}
```

### Building an array

Start with an empty array `[]` and `push` into it:

```js
const result = [];
for (let i = 1; i <= 3; i++) {
  result.push(i * 10);
}
// result is [10, 20, 30]
```

## Questions

Solve them in order in `questions.js`, then run `npm test`.

| # | Function | What it should do |
|---|----------|-------------------|
| Q1 | `sumTo(n)` | 1 + 2 + … + n |
| Q2 | `countEvensUpTo(n)` | how many even numbers from 1 to n |
| Q3 | `countOddsUpTo(n)` | how many odd numbers from 1 to n |
| Q4 | `countPositives(arr)` | how many numbers in the array are greater than 0 |
| Q5 | `countEvenOdd(arr)` | an object `{ even: x, odd: y }` |
| Q6 | `sumOfEvens(arr)` | the total of only the even numbers |
| Q7 | `table(n)` | the multiplication table of n as an array of 10 numbers |
| Q8 | `factorial(n)` | 1 × 2 × … × n (and `factorial(0)` is 1) |
| Q9 | `reverseString(s)` | the string backwards, using a loop |
| Q10 | `countDigits(n)` | how many digits a positive whole number has, without converting to a string |
