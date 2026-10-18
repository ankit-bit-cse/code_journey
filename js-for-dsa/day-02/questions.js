// JS for DSA · Day 2 · loops and counting steps
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `npm test` to check. Every n here is a whole number >= 0.

// Q1. Return 1 + 2 + ... + n. sumTo(0) is 0.
// sumTo(4) -> 10    sumTo(1) -> 1    sumTo(0) -> 0
// Steps: let sum = 0, then for i from 1 to n: sum += i. Return sum.
export function sumTo(n) {
  throw new Error("TODO");
}

// Q2. Return n! = 1 * 2 * ... * n. 0! is 1.
// factorial(5) -> 120    factorial(1) -> 1    factorial(0) -> 1
// Steps: same loop as Q1, but start with result = 1 and multiply instead of add.
export function factorial(n) {
  throw new Error("TODO");
}

// Q3. Return the nth Fibonacci number. fib(0) = 0, fib(1) = 1, and each next
// one is the sum of the two before it: 0, 1, 1, 2, 3, 5, 8, 13, ...
// fibonacci(6) -> 8    fibonacci(1) -> 1    fibonacci(0) -> 0
// Steps:
//   1. let a = 0, b = 1      (a is fib(0), b is fib(1))
//   2. repeat n times: const next = a + b;  a = b;  b = next;
//   3. return a              (after n moves, a is fib(n))
export function fibonacci(n) {
  throw new Error("TODO");
}

// Q4. Return the smallest divisor of n that is bigger than 1. Here n >= 2.
// firstDivisor(15) -> 3    firstDivisor(8) -> 2    firstDivisor(7) -> 7
// Steps:
//   1. let d = 2
//   2. for d from 2 up to n: if n % d === 0, break out of the loop
//   3. return d   (declare d before the loop so you can still use it after)
export function firstDivisor(n) {
  throw new Error("TODO");
}

// Q5. Return the sum of 1..n, but skip every multiple of 3.
// sumSkipping3(6) -> 12  (1 + 2 + 4 + 5)    sumSkipping3(2) -> 3    sumSkipping3(0) -> 0
// Steps: the Q1 loop, but put `if (i % 3 === 0) continue;` as the first line inside.
export function sumSkipping3(n) {
  throw new Error("TODO");
}

// Q6. Count the pairs (i, j) with 0 <= i < j < n. Use two nested loops.
// countPairs(3) -> 3  (0,1  0,2  1,2)    countPairs(4) -> 6    countPairs(1) -> 0
// Steps:
//   1. let count = 0
//   2. for i from 0 to n - 1:
//        for j from i + 1 to n - 1:   (j starts after i, so i < j)
//          count++
//   3. return count
export function countPairs(n) {
  throw new Error("TODO");
}

// Q7. Return an array of n strings: row k has k stars.
// starRows(3) -> ["*", "**", "***"]    starRows(1) -> ["*"]    starRows(0) -> []
// Steps:
//   1. const rows = []
//   2. for row from 1 to n:
//        let line = "";  then an inner loop that adds "*" to line `row` times
//        rows.push(line)
//   3. return rows
export function starRows(n) {
  throw new Error("TODO");
}

// Q8. Return true if n is prime: bigger than 1 and divisible only by 1 and itself.
// isPrime(7) -> true    isPrime(9) -> false    isPrime(2) -> true    isPrime(1) -> false
// Steps:
//   1. if n < 2, return false
//   2. for (let i = 2; i * i <= n; i++): if n % i === 0, return false
//      (a divisor bigger than √n always has a partner smaller than √n,
//       so checking up to √n is enough)
//   3. return true
export function isPrime(n) {
  throw new Error("TODO");
}
