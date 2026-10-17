# Day 1 · JavaScript · if / else: making decisions

## Concept

A program often has to **choose** what to do. `if` checks a condition; if it is `true` the block runs, otherwise the `else` block runs.

```js
const age = 16;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("Too young to vote");
}
```

More than two choices? Chain them with `else if`. JavaScript checks top to bottom and runs **only the first** block whose condition is true.

```js
if (marks >= 90) {
  grade = "A";
} else if (marks >= 75) {
  grade = "B";
} else {
  grade = "C";
}
```

### Comparison operators

| Operator | Meaning | Example (`x = 5`) |
|----------|---------|-------------------|
| `===` | equal | `x === 5` → `true` |
| `!==` | not equal | `x !== 5` → `false` |
| `>` `<` | greater / less | `x > 3` → `true` |
| `>=` `<=` | greater-or-equal / less-or-equal | `x <= 5` → `true` |

Always use `===`, not `==`. (`"5" == 5` is `true`, which hides bugs. `"5" === 5` is `false`.)

### Combining conditions

| Operator | Meaning | Example |
|----------|---------|---------|
| `&&` | AND: both must be true | `age >= 13 && age <= 19` (a teenager) |
| `\|\|` | OR: at least one true | `day === "Sat" \|\| day === "Sun"` |
| `!` | NOT: flips true/false | `!isRaining` |

### Even or odd: the `%` operator

`%` gives the **remainder** after division. `7 % 2` is `1`, `8 % 2` is `0`.
So a number is **even** when `n % 2 === 0`.

## Questions

Open `questions.js`, solve them **in order**, then run:

```bash
npm test
```

A question you haven't solved yet shows as **skipped**. A wrong answer shows as **failed** and tells you what was expected.

| # | Function | What it should do |
|---|----------|-------------------|
| Q1 | `isEven(n)` | `true` if `n` is even, else `false` |
| Q2 | `evenOrOdd(n)` | the string `"even"` or `"odd"` |
| Q3 | `isPositive(n)` | `true` if `n` is greater than 0 |
| Q4 | `signOf(n)` | `"positive"`, `"negative"` or `"zero"` |
| Q5 | `largerOfTwo(a, b)` | the bigger number |
| Q6 | `largestOfThree(a, b, c)` | the biggest of three |
| Q7 | `grade(marks)` | `"A"` (90+), `"B"` (75–89), `"C"` (50–74), `"F"` (below 50) |
| Q8 | `isLeapYear(year)` | leap year rules (see the hint in the file) |
