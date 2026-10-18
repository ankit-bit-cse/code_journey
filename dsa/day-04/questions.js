// DSA · Day 4 · recursion on arrays and strings
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `./check.sh dsa 4` to check. Use recursion, not loops (a question says when a loop is OK),
// and no .slice(), .flat() or .reduce(): pass an index instead of a smaller copy.

// Q1. Return the largest value in arr[i..] (from index i to the end). arr has at least one element.
// maxRec([3, 9, 2]) -> 9    maxRec([-4, -2, -9]) -> -2    maxRec([9, 1, 5], 1) -> 5
// Steps:
//   1. Base case: i is the LAST index (i === arr.length - 1). The max of one element is that element.
//   2. Smaller problem: ask maxRec(arr, i + 1) for the largest value AFTER index i. Trust it.
//   3. Return whichever is bigger: arr[i] or that answer (Math.max is fine).
//   4. Check by hand: maxRec([3, 9, 2]) -> max(3, maxRec(.., 1)) -> max(3, max(9, 2)) -> 9
export function maxRec(arr, i = 0) {
  throw new Error("TODO");
}

// Q2. Return true if arr[i..] never goes down (each element <= the next one).
// isSortedRec([1, 2, 2, 5]) -> true    isSortedRec([1, 3, 2]) -> false    isSortedRec([]) -> true
// Steps:
//   1. Base case: if fewer than 2 elements are left (i >= arr.length - 1), return true.
//      (Why does this also handle the empty array?)
//   2. If arr[i] > arr[i + 1], you found a step down: return false right away.
//   3. Otherwise the answer is whatever isSortedRec says about the rest, starting at i + 1.
export function isSortedRec(arr, i = 0) {
  throw new Error("TODO");
}

// Q3. Return the index of the first x in arr at or after index i, or -1 if there is none.
// linearSearchRec([4, 7, 7], 7) -> 1    linearSearchRec([4, 7], 5) -> -1    linearSearchRec([5, 3, 5], 5, 1) -> 2
// Key idea: same shape as Q2, but there are TWO ways to stop.
// Steps:
//   1. Base case 1: i walked off the end. What do you return?
//   2. Base case 2: arr[i] is x. What do you return?
//   3. Otherwise search the rest, starting at i + 1, and return its answer unchanged.
// Edge cases to check: empty array, x at the very end, x appears twice.
export function linearSearchRec(arr, x, i = 0) {
  throw new Error("TODO");
}

// Q4. Return s with every ch removed, using recursion on the index i.
// removeCharRec("banana", "a") -> "bnn"    removeCharRec("xyz", "q") -> "xyz"    removeCharRec("", "a") -> ""
// Key idea: the answer for s from index i = (s[i], or nothing if it is ch) + the answer from i + 1.
// Steps:
//   1. Base case: i === s.length. The rest of an empty string is "".
//   2. Get rest = the answer from i + 1.
//   3. Glue s[i] in front of rest, unless s[i] is ch.
export function removeCharRec(s, ch, i = 0) {
  throw new Error("TODO");
}

// Q5. nested is an array whose items are numbers or more arrays (any depth). Return the sum of every number.
// sumNested([1, [2, [3]], 4]) -> 10    sumNested([]) -> 0    sumNested([[[[5]]], -1]) -> 4
// Key idea: a loop goes ACROSS one level (a for...of loop is OK here); recursion goes DOWN into a level.
// Steps:
//   1. let total = 0, then loop over the items of nested
//   2. a number: add it. An array (Array.isArray(item)): add sumNested(item), and trust it.
//   3. return total
// Where is the base case? (Hint: what happens for an array with no arrays inside it?)
export function sumNested(nested) {
  throw new Error("TODO");
}

// Q6. Return one flat array with every number of nested, left to right. Don't use .flat().
// flatten([1, [2, [3, 4]], 5]) -> [1, 2, 3, 4, 5]    flatten([[], [[]]]) -> []    flatten([7]) -> [7]
// Pattern: recursion that BUILDS a result. Same walk as Q5, but you collect instead of add.
// Think: if flatten(item) gives you a flat array, how do you get its values into your own result?
// (A loop that pushes them, or a helper(arr, out) that pushes everything into ONE shared out array.)
// Base case: an array with no arrays inside it just copies its numbers.
export function flatten(nested) {
  throw new Error("TODO");
}

// Q7. A robot starts at the top-left of a grid with r rows and c columns (r, c >= 1).
// It can only move right or down. How many different paths reach the bottom-right cell?
// countPathsInGridRec(2, 2) -> 2    countPathsInGridRec(3, 3) -> 6    countPathsInGridRec(1, 5) -> 1
// Pattern: count = (paths if the first move is down) + (paths if the first move is right).
// Think: after one move down, what size of grid is left? After one move right?
// Base case: a grid with a single row or a single column has exactly 1 path.
// (This makes 2 calls per step, so it gets slow for big grids. Day 5 fixes that.)
export function countPathsInGridRec(r, c) {
  throw new Error("TODO");
}

// Q8. Return every subsequence of s: keep or drop each character, without changing the order.
// Order matters: decide characters left to right, and try "take it" BEFORE "skip it".
// subsequences("ab") -> ["ab", "a", "b", ""]    subsequences("") -> [""]
// subsequences("abc") -> ["abc", "ab", "ac", "a", "bc", "b", "c", ""]
// Pattern: take / skip. A helper(i, current) with a shared `out` array.
// Base case: i === s.length: every character is decided, so current is one finished answer.
// Think: for "aa", should "a" appear twice? (Yes: keep duplicates, there are 2 ** s.length answers.)
// Dry run "ab": helper(0,"") -> take a: helper(1,"a") -> take b: "ab" saved, skip b: "a" saved
//                            -> skip a: helper(1,"")  -> take b: "b" saved,  skip b: "" saved
export function subsequences(s) {
  throw new Error("TODO");
}
