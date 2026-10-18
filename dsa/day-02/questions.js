// DSA · Day 2 · space complexity and the cost of built-ins
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `./check.sh dsa 2` to check. Today's rule: no `.sort()`, and no `includes`, `indexOf`, `shift`,
// `unshift` or `splice` inside a loop (each one hides another loop). Every question says its target.

// Q1. Return true if any value appears more than once.
// containsDuplicate([1, 2, 3, 1]) -> true    containsDuplicate([1, 2, 3]) -> false    containsDuplicate([]) -> false
// Slow version (O(n²)): for each i, check arr.slice(0, i).includes(arr[i]).
// Aim for O(n) time, O(n) extra space.
// Steps:
//   1. Make an empty Set called seen.
//   2. Loop over the values. For each value x: if seen already has x, return true right away.
//   3. Otherwise add x to seen.
//   4. After the loop, nothing repeated: return false.
//   (Set.has is O(1), arr.includes is O(n). That one swap is the whole speed-up.)
export function containsDuplicate(arr) {
  throw new Error("TODO");
}

// Q2. Return true if s is a subsequence of t: you can delete some letters of t (or none) and get s,
// without changing the order.
// isSubsequence("ace", "abcde") -> true    isSubsequence("aec", "abcde") -> false    isSubsequence("", "abc") -> true
// Aim for O(n) time (n = t.length) and O(1) space: no new strings, no indexOf.
// Steps:
//   1. Keep a pointer i into s, starting at 0.
//   2. Walk through t with a pointer j. Whenever t[j] equals s[i], that letter of s is matched: move i on.
//   3. j always moves on, matched or not.
//   4. At the end, did i reach s.length? That means every letter of s was matched, in order.
// Dry run: s = "ace", t = "abcde" -> a matches (i = 1), b no, c matches (i = 2), d no, e matches (i = 3). 3 === 3.
export function isSubsequence(s, t) {
  throw new Error("TODO");
}

// Q3. Return the index of the first value that appears exactly once in arr, or -1 if there is none.
// firstUniqueIndex([4, 5, 4, 6, 5]) -> 3    firstUniqueIndex(["a", "b", "a"]) -> 1    firstUniqueIndex([2, 2]) -> -1
// Slow version (O(n²)): for each i, count how often arr[i] appears with an inner loop.
// Key idea: two passes. The first pass counts, the second pass reads the counts. O(n) time, O(n) space.
// Steps:
//   1. Pass 1: build a Map from value -> how many times it appears.
//   2. Pass 2: go through arr again, from the left. Return the first index whose count is 1.
//   3. What if no count is 1?
export function firstUniqueIndex(arr) {
  throw new Error("TODO");
}

// Q4. Return the value that appears most often. On a tie, return the SMALLEST of the tied values.
// An empty array returns null.
// mostFrequent([3, 1, 3, 2, 1]) -> 1 (1 and 3 both appear twice, 1 is smaller)    mostFrequent([7]) -> 7
// Key idea: one counting pass into a Map, then one pass over the Map. O(n), not O(n²).
// Steps:
//   1. Count every value (same as Q3, pass 1).
//   2. Walk the entries of the Map, keeping the best value and the best count so far.
//   3. A value wins if its count is bigger, OR the count is equal and the value is smaller.
// Edge cases: empty array, negative numbers, a single value.
export function mostFrequent(arr) {
  throw new Error("TODO");
}

// Q5. prices[i] is a share's price on day i. Buy on one day and sell on a LATER day. Return the
// biggest profit you can make, or 0 if no trade makes money.
// maxProfit([7, 1, 5, 3, 6, 4]) -> 5 (buy at 1, sell at 6)    maxProfit([7, 6, 4, 1]) -> 0
// Slow version (O(n²)): try every buy day with every later sell day.
// Key idea: one pass. On each day, if you sold TODAY, the best buy day was the cheapest day before it.
// Steps:
//   1. Keep two numbers: the lowest price seen so far, and the best profit so far (starts at 0).
//   2. For each price: what profit would selling today give? Update the best profit.
//   3. Then update the lowest price. (Why does the order of steps 2 and 3 not break anything?)
// O(n) time, O(1) space: no extra arrays.
export function maxProfit(prices) {
  throw new Error("TODO");
}

// Q6. queries is a list of [l, r] pairs. For each one, return arr[l] + arr[l + 1] + ... + arr[r]
// (both ends included). Return the answers as an array, in the same order.
// rangeSums([2, 4, 1, 3], [[0, 1], [1, 3], [2, 2]]) -> [6, 8, 1]    rangeSums([5], []) -> []
// Pattern: prefix sums. Build once in O(n), then answer each query in O(1).
// Guiding questions: if prefix[i] is the sum of the first i values (so prefix[0] = 0 and
// prefix has arr.length + 1 slots), which two prefix values do you subtract to get the sum of l..r?
// Check your answer on [0, 1] and on a query that starts at 0.
// Slow version: a loop from l to r for every query, O(n) per query.
export function rangeSums(arr, queries) {
  throw new Error("TODO");
}

// Q7. a and b are each sorted from small to big. Return ONE new sorted array with all their values.
// mergeSortedNoSort([1, 4, 9], [2, 3, 10]) -> [1, 2, 3, 4, 9, 10]    mergeSortedNoSort([], [1]) -> [1]
// Pattern: two pointers, one per array. Aim for O(n + m). No .sort() and no [...a, ...b].sort().
// Guiding questions: the smallest value not yet used is at the front of a OR the front of b. Which one
// do you take? What do you do when one array runs out before the other?
// Dry run: [1, 4] and [2, 3] -> take 1 (from a), take 2 (b), take 3 (b), b is empty, take 4 (a).
export function mergeSortedNoSort(a, b) {
  throw new Error("TODO");
}

// Q8. arr is sorted from small to big. Remove the duplicates IN PLACE: move the distinct values to the
// front of arr, in order, and return k, how many distinct values there are. What is left after
// arr[k - 1] does not matter. The tests look at k and at arr[0..k-1].
// removeDuplicatesInPlace([1, 1, 2, 3, 3]) -> 3, and arr starts with [1, 2, 3]
// removeDuplicatesInPlace([]) -> 0
// Pattern: read and write pointers (JS for DSA Day 5). O(n) time, O(1) extra space: no Set, no new
// array, no splice (each splice is O(n), which makes the loop O(n²)).
// Guiding questions: in a sorted array, where can the copies of a value be? So how can you tell that
// arr[read] is a NEW value just by looking at one other slot?
// Invariant: arr[0..write-1] always holds the distinct values seen so far, in order.
export function removeDuplicatesInPlace(arr) {
  throw new Error("TODO");
}
