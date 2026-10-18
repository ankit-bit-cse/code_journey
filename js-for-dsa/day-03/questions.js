// JS for DSA · Day 3 · functions, scope and helpers
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `./check.sh 3` to check. Use let and const, never var.

// Q1. Return the bigger of a and b. Write it as an arrow function.
// max2(3, 8) -> 8    max2(-1, -5) -> -1    max2(4, 4) -> 4
// Steps: (a, b) => a > b ? a : b    (or use an if with two returns inside { })
export const max2 = (a, b) => {
  throw new Error("TODO");
};

// Q2. Return the biggest of a, b and c. Do not use Math.max.
// max3(3, 9, 5) -> 9    max3(7, 2, 1) -> 7    max3(-4, -2, -8) -> -2
// Steps: call your max2() from Q1 twice: max2 of (max2 of a and b) and c.
export function max3(a, b, c) {
  throw new Error("TODO");
}

// Q3. Keep x inside the range lo..hi: below lo gives lo, above hi gives hi.
// clamp(15, 0, 10) -> 10    clamp(-3, 0, 10) -> 0    clamp(7, 0, 10) -> 7
// Steps: two early returns: if x < lo return lo; if x > hi return hi; otherwise return x.
export function clamp(x, lo, hi) {
  throw new Error("TODO");
}

// Q4. Return base to the power exp using a loop (no ** and no Math.pow).
// exp is a whole number >= 0. If exp is left out, it should be 2 (a default value).
// power(2, 5) -> 32    power(7, 0) -> 1    power(5) -> 25
// Steps:
//   1. change the parameter list to (base, exp = 2)
//   2. let result = 1
//   3. repeat exp times: result *= base
//   4. return result
export function power(base, exp) {
  throw new Error("TODO");
}

// Q5. Return the sum of the proper divisors of n: every divisor smaller than n itself.
// n is a whole number >= 1.
// sumOfProperDivisors(12) -> 16  (1 + 2 + 3 + 4 + 6)    sumOfProperDivisors(7) -> 1    sumOfProperDivisors(1) -> 0
// Steps:
//   1. let sum = 0
//   2. for d from 1 to n - 1: if n % d === 0, add d to sum
//   3. return sum
export function sumOfProperDivisors(n) {
  throw new Error("TODO");
}

// Q6. A perfect number equals the sum of its proper divisors: 6 = 1 + 2 + 3.
// isPerfect(6) -> true    isPerfect(28) -> true    isPerfect(12) -> false    isPerfect(1) -> false
// Steps: one line: return sumOfProperDivisors(n) === n   (your Q5 helper does the real work)
export function isPerfect(n) {
  throw new Error("TODO");
}

// Q7. Apply the function fn to x, n times in a row, and return the result.
// applyN((v) => v * 2, 1, 3) -> 8   (1 -> 2 -> 4 -> 8)
// applyN((v) => v + 10, 5, 2) -> 25    applyN((v) => v * 2, 7, 0) -> 7
// Steps:
//   1. let value = x
//   2. repeat n times: value = fn(value)    (fn is just a variable holding a function: call it)
//   3. return value
export function applyN(fn, x, n) {
  throw new Error("TODO");
}

// Q8. Count how many items of arr make testFn return true. Do not change arr.
// countWhere([1, 2, 3, 4], (v) => v % 2 === 0) -> 2
// countWhere([5, -1, 0, -7], (v) => v < 0) -> 2    countWhere([], (v) => true) -> 0
// Steps:
//   1. let count = 0
//   2. for each index i: if testFn(arr[i]) is true, count++
//   3. return count
// Try it with your own helpers too: countWhere([6, 10, 28], isPerfect) -> 2
export function countWhere(arr, testFn) {
  throw new Error("TODO");
}
