// JS for DSA · Day 8 · Map and Set
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `npm test` to check. Always return arrays, numbers or null, never a Map or Set itself.

// Q1. Return a new array with the duplicates removed, keeping the order values were first seen.
// unique([3, 1, 3, 2, 1]) -> [3, 1, 2]    unique([]) -> []
// Steps: `[...new Set(arr)]` does it in one line. A Set keeps insertion order.
export function unique(arr) {
  throw new Error("TODO");
}

// Q2. Return true if any value appears more than once.
// hasDuplicate([1, 2, 3, 1]) -> true    hasDuplicate([1, 2, 3]) -> false
// Steps: make a `seen` Set. For each x: if seen.has(x) return true, else seen.add(x). After the loop, return false.
export function hasDuplicate(arr) {
  throw new Error("TODO");
}

// Q3. Return how many different values the array has.
// countDistinct([1, 2, 2, 3, 3, 3]) -> 3    countDistinct([]) -> 0
// Steps: put everything in a Set and read its `.size`.
export function countDistinct(arr) {
  throw new Error("TODO");
}

// Q4. Return the values that are in both a and b, without duplicates, in a's order.
// intersection([1, 2, 2, 3], [2, 3, 4]) -> [2, 3]    intersection([1, 2], [3]) -> []
// Steps:
//   1. const inB = new Set(b)       (so each lookup is O(1))
//   2. const added = new Set()      (so you don't add the same value twice)
//   3. for each x of a: if inB.has(x) and !added.has(x), push x to the result and add it to `added`
//   4. return the result array
export function intersection(a, b) {
  throw new Error("TODO");
}

// Q5. Return the first value that shows up a second time while reading left to right, or null if none does.
// firstRepeated([2, 5, 1, 5, 2]) -> 5    firstRepeated([1, 2, 3]) -> null
// Steps: the same loop as Q2, but return x instead of true, and null instead of false.
export function firstRepeated(arr) {
  throw new Error("TODO");
}

// Q6. Return the value that appears most often. On a tie, return the one seen first. Empty array -> null.
// mostCommon(["a", "b", "b", "a", "c", "b"]) -> "b"    mostCommon([1, 2, 2, 1]) -> 1    mostCommon([]) -> null
// Steps:
//   1. const count = new Map()
//   2. for each x: count.set(x, (count.get(x) || 0) + 1)
//   3. let best = null, bestCount = 0
//   4. for (const [value, c] of count): if c > bestCount, update best and bestCount
//      (use > not >=, so on a tie the earlier value wins: a Map remembers insertion order)
//   5. return best
export function mostCommon(arr) {
  throw new Error("TODO");
}

// Q7. arr holds every whole number from 1 to n except one, in any order. Return the missing one.
// missingNumber([1, 2, 4, 5], 5) -> 3    missingNumber([2, 3, 1], 4) -> 4    missingNumber([], 1) -> 1
// Steps:
//   1. const have = new Set(arr)
//   2. for i from 1 to n: if !have.has(i), return i
export function missingNumber(arr, n) {
  throw new Error("TODO");
}

// Q8. Return the length of the longest piece of s (a substring: letters next to each other)
// that has no repeated character.
// longestUniqueSubstring("abcabcbb") -> 3 ("abc")    longestUniqueSubstring("bbbb") -> 1    longestUniqueSubstring("") -> 0
// Steps (a "sliding window": the piece s[left..right] grows on the right and shrinks on the left):
//   1. const inWindow = new Set();  let left = 0, best = 0
//   2. for right from 0 to s.length - 1:
//        const ch = s[right]
//   3.   while inWindow.has(ch): remove s[left] from the Set and do left++
//        (this shrinks the window until ch is no longer inside it)
//   4.   inWindow.add(ch)
//   5.   the window length is right - left + 1; keep the biggest in `best`
//   6. return best
export function longestUniqueSubstring(s) {
  throw new Error("TODO");
}
