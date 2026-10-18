# JS for DSA · Day 10 · 2D arrays, recursion and binary search

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

### 2D arrays (grids)

A grid is an array of rows. `grid[r][c]` is row `r`, column `c`.

```js
const grid = [
  [1, 2, 3],
  [4, 5, 6],
];
grid[1][0];         // 4
grid.length;        // 2 rows
grid[0].length;     // 3 columns
```

Making one: use `Array.from`, so every row is a **new** array.

```js
const good = Array.from({ length: 3 }, () => new Array(4).fill(0));
const bad = new Array(3).fill(new Array(4).fill(0));
bad[0][0] = 9;      // all three rows change: they are the SAME array
```

Visiting every cell is a loop inside a loop:

```js
for (let r = 0; r < grid.length; r++) {
  for (let c = 0; c < grid[r].length; c++) {
    // grid[r][c]
  }
}
```

The 4 neighbours of `(r, c)` are up `(r-1, c)`, down `(r+1, c)`, left `(r, c-1)` and right `(r, c+1)`. Check they are inside the grid before reading them.

### Recursion

A function that calls itself. It needs two parts:

1. a **base case** that answers directly and stops, and
2. a **smaller problem**: call yourself on less input.

```js
function countdown(n) {
  if (n === 0) return;     // base case
  console.log(n);
  countdown(n - 1);        // smaller problem
}
```

Each call waits on the **call stack** (Day 3) until the call it made returns. No base case means the stack grows forever: `RangeError: Maximum call stack size exceeded`.

### Binary search

On a **sorted** array, look at the middle. If it's too small, throw away the left half; if too big, the right half. Keep `lo` and `hi` as the edges of what's left, and `mid = Math.floor((lo + hi) / 2)`. Stop when found, or when `lo > hi`.

## DSA connection

Grids are how DSA problems describe maps, boards and mazes. Recursion is the base of trees, backtracking and divide-and-conquer. Binary search halves the work every step, so 1,000,000 items take about 20 steps: the O(log n) you met on Day 1.

## What's next

You now know the JavaScript that DSA needs: numbers, loops, functions, arrays, strings, objects, Map and Set, sorting, grids and recursion. You're ready to start DSA problems. Advanced JavaScript (classes, promises, async/await, modules) comes later.

## Questions

Solve them in order in [`questions.js`](questions.js), then run `./check.sh 10`. Each stub has **Steps** comments: try without them first.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `makeGrid(rows, cols, value)` | a new grid filled with value |
| Q2 | `rowSums(grid)` | the sum of each row |
| Q3 | `transpose(grid)` | rows turned into columns |
| Q4 | `diagonalSum(grid)` | the sum of both diagonals |
| Q5 | `factorialRec(n)` | n!, with recursion |
| Q6 | `sumArrayRec(arr)` | the sum, with recursion |
| Q7 | `powerRec(base, exp)` | base to the power exp, with recursion |
| Q8 | `binarySearch(sorted, target)` | the index of target, or -1 |
