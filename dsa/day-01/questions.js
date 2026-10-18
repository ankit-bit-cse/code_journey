// DSA · Day 1 · time complexity: counting steps
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `./check.sh dsa 1` to check. Every n here is a whole number >= 0. In Q1–Q5, return how many
// times `steps++` runs in the code shape shown: work it out on paper first, then write the formula.

// Q1. Return how many times steps++ runs in this code:
//       for (let i = 0; i < n; i++) steps++;     // loop A
//       for (let j = 0; j < n; j++) steps++;     // loop B
//       for (let k = 0; k < 5; k++) steps++;     // loop C
// stepsSequential(0) -> 5    stepsSequential(3) -> 11    stepsSequential(10) -> 25
// Rule of the day: loops one AFTER another ADD.
// Steps:
//   1. How many times does loop A run for n = 3? Loop B? Loop C (careful: C does not depend on n)?
//   2. Add the three counts. Check that you get 11 for n = 3.
//   3. Write the same thing for any n, as one expression, and return it. No loop needed.
//   4. Which Big-O is it once you drop the constants? (Answer for yourself: it is not a test.)
export function stepsSequential(n) {
  throw new Error("TODO");
}

// Q2. Return how many times steps++ runs in this code:
//       for (let i = 0; i < n; i++)
//         for (let j = 0; j < i; j++) steps++;   // j stops BEFORE i
// stepsNested(1) -> 0    stepsNested(4) -> 6    stepsNested(5) -> 10
// Rule of the day: a loop INSIDE a loop MULTIPLIES (here roughly, because the inner loop grows).
// Steps:
//   1. Make a little table for n = 4: when i = 0 the inner loop runs 0 times, i = 1 runs 1 time,
//      i = 2 runs ... , i = 3 runs ...
//   2. So the total is 0 + 1 + 2 + ... + (n - 1). Check it is 6 for n = 4.
//   3. Pair the first and last numbers of that sum (like the Gauss trick in concept.html section 2).
//      How many pairs are there, and what does each pair add up to? That gives you a formula.
//   4. Return the formula. Check that n = 1 gives 0. It is O(n²): about n² / 2.
export function stepsNested(n) {
  throw new Error("TODO");
}

// Q3. Return how many times steps++ runs in this code:
//       let m = n;
//       while (m > 1) { m = Math.floor(m / 2); steps++; }
// stepsHalving(1) -> 0    stepsHalving(2) -> 1    stepsHalving(8) -> 3    stepsHalving(1000) -> 9
// Key idea: each step HALVES what is left, so the count is how many times you can halve n before
// reaching 1. That is about log₂(n), O(log n).
// Steps:
//   1. Here it is fine to run the loop itself and count (the loop is only ~log n long, so it is fast).
//   2. Dry run: n = 9 -> m = 4 (steps 1) -> 2 (steps 2) -> 1 (steps 3) -> stop. So 3.
//   3. What should n = 0 and n = 1 give? (The loop never starts.)
export function stepsHalving(n) {
  throw new Error("TODO");
}

// Q4. Return how many times steps++ runs in this code:
//       for (let i = 1; i * i <= n; i++) steps++;
// stepsSqrt(0) -> 0    stepsSqrt(1) -> 1    stepsSqrt(10) -> 3    stepsSqrt(16) -> 4
// Key idea: the loop goes on while i² <= n, so it stops near √n. O(√n).
// Steps:
//   1. Which values of i pass the test for n = 10? (1, 2, 3 ... is 4 * 4 <= 10?)
//   2. So the answer is the biggest whole i with i * i <= n. Is that Math.floor of something?
//   3. Check the perfect square n = 16: is 4 counted?
export function stepsSqrt(n) {
  throw new Error("TODO");
}

// Q5. Return how many times steps++ runs in this code:
//       for (let i = 0; i < n; i++)
//         for (let m = n; m > 1; m = Math.floor(m / 2)) steps++;
// stepsLogLinear(1) -> 0    stepsLogLinear(8) -> 24    stepsLogLinear(10) -> 30
// Key idea: the inner loop does NOT depend on i, so it runs the same number of times on every
// outer round. Outer × inner: this is the shape of O(n log n).
// Steps:
//   1. How many times does the inner loop run for one round? You already wrote that in Q3.
//   2. How many rounds does the outer loop make?
//   3. Multiply, using your Q3 function.
export function stepsLogLinear(n) {
  throw new Error("TODO");
}

// Q6. Return 1 + 2 + ... + n, in O(1): no loop, no recursion.
// sumTo(0) -> 0    sumTo(4) -> 10    sumTo(100) -> 5050
// Pattern: replace a loop with a formula (Gauss).
// Guiding questions: write 1 + 2 + ... + n forwards and backwards under each other. What does each
// column add up to? How many columns are there? You used the same idea in Q2, with n - 1 instead of n.
export function sumTo(n) {
  throw new Error("TODO");
}

// Q7. Return how many divisors n has (numbers from 1 to n that divide n exactly). Here n >= 1.
// countDivisors(1) -> 1    countDivisors(12) -> 6    countDivisors(16) -> 5    countDivisors(13) -> 2
// Pattern: divisors come in pairs, so loop only up to √n (the Q4 loop). Aim for O(√n).
// Guiding questions: if i divides n, which OTHER divisor do you get for free? For 12: 1 & 12, 2 & 6,
// 3 & 4. And for 16 = 4 × 4, is the pair (4, 4) one divisor or two?
// Edge case: perfect squares (16 has 1, 2, 4, 8, 16: five, not six).
export function countDivisors(n) {
  throw new Error("TODO");
}

// Q8. sorted is sorted from small to big. Return true if two DIFFERENT positions add up to target.
// hasPairWithSum([1, 3, 4, 6, 9], 10) -> true (1 + 9, 4 + 6)    hasPairWithSum([1, 2, 5], 4) -> false
// hasPairWithSum([5], 10) -> false (you can't use the same 5 twice)
// Pattern: two pointers from both ends. Aim for O(n): the slow way is every pair, O(n²).
// Guiding questions: start with lo at the smallest and hi at the biggest. If their sum is too
// small, which pointer can move to make it bigger? If it is too big? When do you stop?
// Invariant: no pair using a value outside [lo, hi] can work, so nothing you threw away was needed.
// Edge cases: an empty array, negatives, duplicates like [3, 3] with target 6.
export function hasPairWithSum(sorted, target) {
  throw new Error("TODO");
}
