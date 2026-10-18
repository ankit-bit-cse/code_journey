// DSA · Day 5 · recursion trees and memoization
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `./check.sh dsa 5` to check. A memo function must LOOK IN its memo before doing any work:
// some tests pass a memo that is already filled in, and expect you to trust it.

// Q1. Return the n-th Fibonacci number with plain recursion (no memo yet).
// fib: 0, 1, 1, 2, 3, 5, 8, 13, ...  so fibRec(0) -> 0, fibRec(1) -> 1, fibRec(7) -> 13
// fibRec(0) -> 0    fibRec(2) -> 1    fibRec(10) -> 55
// Steps:
//   1. Base cases: if n is 0 return 0, if n is 1 return 1 (or: if n < 2 return n).
//   2. Otherwise return fibRec(n - 1) + fibRec(n - 2). Trust both calls.
//   3. Try fibRec(40) in node. Feel how slow it is? That's the next question.
export function fibRec(n) {
  throw new Error("TODO");
}

// Q2. How many times is fibRec called, in total, to compute fibRec(n)? Count the first call too.
// fibCalls(0) -> 1    fibCalls(1) -> 1    fibCalls(2) -> 3    fibCalls(5) -> 15
// Steps:
//   1. Base cases: fibRec(0) and fibRec(1) make no more calls, so they cost 1 call each.
//   2. Otherwise, fibRec(n) costs 1 (itself) + the calls made by fibRec(n - 1) + the calls made by fibRec(n - 2).
//   3. Write that as a recursion: fibCalls(n) has the same shape as fibRec(n).
//   4. Check by hand with the tree in concept.html: fib(4) makes 9 calls.
export function fibCalls(n) {
  throw new Error("TODO");
}

// Q3. Fibonacci again, but each answer is computed only once and kept in memo.
// fibMemo(10) -> 55    fibMemo(30) -> 832040    fibMemo(6, { 5: 100, 4: 0 }) -> 100   (it trusted the memo)
// Pattern: memoization. Aim for O(n) calls instead of about 2^n.
// Steps:
//   1. FIRST: if n is already a key in memo (`n in memo`), return memo[n].
//   2. Base cases as in Q1.
//   3. Compute fibMemo(n - 1, memo) + fibMemo(n - 2, memo): pass the SAME memo down.
//   4. Store it in memo[n] before returning it.
export function fibMemo(n, memo = {}) {
  throw new Error("TODO");
}

// Q4. You climb n stairs, 1 or 2 steps at a time. How many different ways are there to reach the top?
// climbStairs(1) -> 1    climbStairs(2) -> 2 (1+1, 2)    climbStairs(3) -> 3 (1+1+1, 1+2, 2+1)    climbStairs(0) -> 1
// climbStairs(4, { 3: 10, 2: 5 }) -> 15   (it trusted the memo)
// Key idea: look at the LAST move. You arrived from stair n - 1 (a 1-step) or from stair n - 2 (a 2-step).
// Steps:
//   1. Check the memo first, like Q3.
//   2. Base cases: n === 0 and n === 1 both have exactly 1 way. (Why is "do nothing" 1 way?)
//   3. ways(n) = ways(n - 1) + ways(n - 2). Store it in memo[n].
// Look familiar? Compare climbStairs(1..6) with the Fibonacci numbers.
export function climbStairs(n, memo = {}) {
  throw new Error("TODO");
}

// Q5. Tribonacci: like Fibonacci, but each number is the sum of the 3 before it. Use a memo.
// T(0) = 0, T(1) = 1, T(2) = 1, then 2, 4, 7, 13, 24, ...
// tribonacci(4) -> 4    tribonacci(10) -> 149    tribonacci(5, { 4: 1, 3: 1, 2: 1 }) -> 3   (it trusted the memo)
// Key idea: the same memo pattern as Q3, with three calls instead of two.
// Steps:
//   1. Memo first. 2. Three base cases. 3. Three recursive calls, sharing one memo, then store.
// Think: without the memo, about how many calls does each step make? Why is the memo even more important here?
export function tribonacci(n, memo = {}) {
  throw new Error("TODO");
}

// Q6. Day 4's countPathsInGridRec again (right/down paths across an r x c grid), now with a memo.
// Use the string key `${r},${c}` (for example "3,2") because a pair of numbers can't be one plain key.
// gridPathsMemo(3, 3) -> 6    gridPathsMemo(10, 10) -> 48620    gridPathsMemo(3, 3, { "2,3": 50, "3,2": 50 }) -> 100
// Pattern: memoization with two parameters.
// Think: which (r, c) pairs get computed again and again without a memo? (Hint: go down then right,
// or right then down: you land in the same smaller grid.)
// Base case: a single row or a single column has 1 path. Memo first, store before returning.
export function gridPathsMemo(r, c, memo = {}) {
  throw new Error("TODO");
}

// (Close concept.html first and write Q7 from memory: the lesson animates it.)
// Q7. Tower of Hanoi. Move n disks from peg `from` to peg `to`, using `via` as the spare peg.
// Only one disk moves at a time, and a bigger disk may never sit on a smaller one.
// Return the moves in order, each as a string "X->Y" (the top disk of X goes onto Y).
// hanoiMoves(1, "A", "C", "B") -> ["A->C"]    hanoiMoves(0, "A", "C", "B") -> []
// hanoiMoves(2, "A", "C", "B") -> ["A->B", "A->C", "B->C"]
// Pattern: trust the recursion. To move n disks, the biggest disk must go from -> to exactly once.
// Think: where must the n - 1 smaller disks be at that moment? How did they get there, and where do they go after?
// Base case: n === 0 needs no moves. (2 ** n - 1 moves in total.)
export function hanoiMoves(n, from, to, via) {
  throw new Error("TODO");
}

// Q8. Count the subsets of arr (pick any elements, by position) whose sum is exactly target.
// The empty subset has sum 0. Elements may be negative, and equal values at different positions count separately.
// countSubsetsWithSum([1, 2, 3], 3) -> 2 ({3} and {1, 2})    countSubsetsWithSum([1, 1, 1], 2) -> 3
// countSubsetsWithSum([], 0) -> 1    countSubsetsWithSum([], 5) -> 0
// Pattern: take / skip (Day 4), but now each call RETURNS a count: count(take) + count(skip).
// Base case: every element is decided (i === arr.length). Is what you took exactly target? Return 1 or 0.
// Think: why can't you stop early when the sum goes above target? (Look at the negatives.)
export function countSubsetsWithSum(arr, target) {
  throw new Error("TODO");
}
