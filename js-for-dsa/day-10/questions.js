// JS for DSA · Day 10 · 2D arrays, recursion and binary search
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `npm test` to check. A grid is an array of rows: grid[r][c] is row r, column c.

// Q1. Return a grid with `rows` rows and `cols` columns, every cell set to `value`.
// makeGrid(2, 3, 0) -> [[0, 0, 0], [0, 0, 0]]    makeGrid(0, 5, 1) -> []
// Steps: Array.from({ length: rows }, () => new Array(cols).fill(value)).
//        (NOT new Array(rows).fill([]): that puts the SAME row in every slot)
export function makeGrid(rows, cols, value) {
  throw new Error("TODO");
}

// Q2. Return an array with the sum of each row.
// rowSums([[1, 2], [3, 4], [5, 6]]) -> [3, 7, 11]    rowSums([]) -> []
// Steps: for each row, add up its numbers (a loop, or reduce from Day 9) and push the sum.
export function rowSums(grid) {
  throw new Error("TODO");
}

// Q3. Return the transpose: rows become columns. Don't change the input.
// transpose([[1, 2, 3], [4, 5, 6]]) -> [[1, 4], [2, 5], [3, 6]]    transpose([]) -> []
// Steps:
//   1. if the grid is empty, return []
//   2. const rows = grid.length, cols = grid[0].length
//   3. the answer has `cols` rows and `rows` columns: make it with makeGrid(cols, rows, 0) from Q1
//   4. for every r and c: result[c][r] = grid[r][c]
//   5. return result
export function transpose(grid) {
  throw new Error("TODO");
}

// Q4. grid is square (n rows, n columns). Return the sum of both diagonals.
// If n is odd, the middle cell is on both diagonals: count it only once.
// diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) -> 25 (1 + 5 + 9 + 3 + 7)    diagonalSum([[4]]) -> 4    diagonalSum([]) -> 0
// Steps:
//   1. const n = grid.length;  let sum = 0
//   2. for i from 0 to n - 1:
//        sum += grid[i][i]                   (top-left to bottom-right)
//        if (i !== n - 1 - i) sum += grid[i][n - 1 - i]   (top-right to bottom-left, skip the middle)
//   3. return sum
export function diagonalSum(grid) {
  throw new Error("TODO");
}

// Q5. Return n! using recursion (no loops). 0! is 1.
// factorialRec(5) -> 120    factorialRec(0) -> 1
// Steps:
//   1. base case: if n is 0, return 1
//   2. otherwise: return n * factorialRec(n - 1)
export function factorialRec(n) {
  throw new Error("TODO");
}

// Q6. Return the sum of the array using recursion (no loops).
// sumArrayRec([1, 2, 3]) -> 6    sumArrayRec([]) -> 0
// Steps:
//   1. base case: an empty array sums to 0
//   2. otherwise: the first item + the sum of the rest, where the rest is arr.slice(1)
export function sumArrayRec(arr) {
  throw new Error("TODO");
}

// Q7. Return base to the power exp using recursion (no loops, no **). exp is a whole number >= 0.
// powerRec(2, 10) -> 1024    powerRec(5, 0) -> 1    powerRec(-3, 3) -> -27
// Steps: same shape as Q5. What is the base case? What smaller problem gives you the answer?
export function powerRec(base, exp) {
  throw new Error("TODO");
}

// Q8. sorted is sorted from small to big. Return the index of target, or -1 if it isn't there.
// Use binary search: O(log n), not a loop over every item.
// binarySearch([1, 3, 5, 7, 9, 11], 7) -> 3    binarySearch([1, 3, 5], 4) -> -1    binarySearch([], 1) -> -1
// Steps:
//   1. let lo = 0, hi = sorted.length - 1
//   2. while (lo <= hi):
//        const mid = Math.floor((lo + hi) / 2)
//        if sorted[mid] === target: return mid
//        if sorted[mid] < target: the answer is to the right, so lo = mid + 1
//        else: the answer is to the left, so hi = mid - 1
//   3. return -1   (lo passed hi: nothing left to check)
export function binarySearch(sorted, target) {
  throw new Error("TODO");
}
