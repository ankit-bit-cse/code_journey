// JS for DSA · Day 9 · sorting, array methods and sliding window
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `npm test` to check. Unless a question says otherwise, do NOT change the input array.

// Q1. Return a new array with every number squared.
// squares([1, 2, 3]) -> [1, 4, 9]    squares([]) -> []
// Steps: arr.map((x) => ...) builds a new array from what you return for each x.
export function squares(arr) {
  throw new Error("TODO");
}

// Q2. Return a new array with only the even numbers, in the same order.
// onlyEvens([1, 2, 3, 4]) -> [2, 4]    onlyEvens([1, 3]) -> []
// Steps: arr.filter((x) => ...) keeps x when you return true. Even means x % 2 === 0.
export function onlyEvens(arr) {
  throw new Error("TODO");
}

// Q3. Return the sum of the array using reduce. Empty array -> 0.
// total([1, 2, 3, 4]) -> 10    total([]) -> 0
// Steps: arr.reduce((sum, x) => sum + x, 0). The 0 at the end is the starting sum (it also saves you on an empty array).
export function total(arr) {
  throw new Error("TODO");
}

// Q4. Return a NEW array with the numbers in ascending order. The input must stay unchanged.
// sortNumbers([10, 9, 1]) -> [1, 9, 10]    sortNumbers([3, -1, 2]) -> [-1, 2, 3]
// Steps: copy first with [...arr], then sort the copy with the comparator (a, b) => a - b.
//        (plain .sort() would compare as text and give [1, 10, 9])
export function sortNumbers(arr) {
  throw new Error("TODO");
}

// Q5. Return a new array of the words sorted from shortest to longest.
// Words with the same length keep their original order (JS sort is "stable", so this happens for free).
// sortByLength(["ccc", "a", "bb", "d"]) -> ["a", "d", "bb", "ccc"]
// Steps: same as Q4, but the comparator compares lengths: (a, b) => a.length - b.length.
export function sortByLength(words) {
  throw new Error("TODO");
}

// Q6. Return the k-th largest number (k = 1 means the largest). Duplicates count separately.
// kthLargest([3, 1, 5, 2], 2) -> 3    kthLargest([4, 4, 1], 2) -> 4    kthLargest([7], 1) -> 7
// Steps:
//   1. copy and sort in DESCENDING order: the comparator is (a, b) => b - a
//   2. the largest is now at index 0, so the k-th largest is at index k - 1
export function kthLargest(arr, k) {
  throw new Error("TODO");
}

// Q7. Return true if a and b use exactly the same letters the same number of times.
// isAnagramBySort("listen", "silent") -> true    isAnagramBySort("abc", "abd") -> false
// Steps:
//   1. write a helper: sortLetters(s) = s.split("").sort().join("")
//      (plain .sort() is fine here: letters SHOULD be compared as text)
//   2. return sortLetters(a) === sortLetters(b)
export function isAnagramBySort(a, b) {
  throw new Error("TODO");
}

// Q8. Return the biggest sum of k numbers that sit next to each other. Assume 1 <= k <= arr.length.
// maxSumWindow([2, 1, 5, 1, 3, 2], 3) -> 9 (5 + 1 + 3)    maxSumWindow([4], 1) -> 4
// Steps (a sliding window of size k):
//   1. let sum = the sum of the first k numbers (a loop from 0 to k - 1)
//   2. let best = sum
//   3. for right from k to arr.length - 1:
//        sum += arr[right]          (the new number enters on the right)
//        sum -= arr[right - k]      (the oldest number leaves on the left)
//        best = Math.max(best, sum)
//   4. return best
//   This is O(n): each step adds one number and removes one, instead of re-adding all k.
export function maxSumWindow(arr, k) {
  throw new Error("TODO");
}
