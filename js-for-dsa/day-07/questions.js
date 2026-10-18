// JS for DSA · Day 7 · objects as hash maps
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `./check.sh 7` to check. Use a plain object {} as your map today (Map and Set come on Day 8).

// Q1. Count how many times each character appears in s. Return an object char -> count.
// charFrequency("abca") -> { a: 2, b: 1, c: 1 }    charFrequency("") -> {}
// Steps: const count = {}; for each char c of s: count[c] = (count[c] || 0) + 1; return count.
export function charFrequency(s) {
  throw new Error("TODO");
}

// Q2. Return the character that appears most often in s. On a tie, return the one that
// appears first in s. Return null for an empty string.
// mostFrequentChar("banana") -> "a"    mostFrequentChar("abab") -> "a"    mostFrequentChar("") -> null
// Steps:
//   1. const count = charFrequency(s)   (Q1)
//   2. let best = null
//   3. walk the chars of s again, in order: if best is null or count[c] > count[best], best = c
//      (strict > means an earlier char keeps the lead on a tie)
//   4. return best
export function mostFrequentChar(s) {
  throw new Error("TODO");
}

// Q3. Return true if a and b use exactly the same characters the same number of times.
// isAnagram("listen", "silent") -> true    isAnagram("abc", "abd") -> false    isAnagram("", "") -> true
// Steps:
//   1. if a.length !== b.length, return false
//   2. const count = charFrequency(a)   (Q1)
//   3. for each char c of b:
//        if !count[c] (missing or already 0), return false
//        otherwise count[c]--
//   4. return true
export function isAnagram(a, b) {
  throw new Error("TODO");
}

// Q4. Return the first character of s that appears exactly once, or null if there is none.
// firstNonRepeatingChar("leetcode") -> "l"    firstNonRepeatingChar("aabbc") -> "c"    firstNonRepeatingChar("aabb") -> null
// Steps: two passes. First count every char (Q1). Then walk s again, in order,
//   and return the first c with count[c] === 1. After the loop, return null.
export function firstNonRepeatingChar(s) {
  throw new Error("TODO");
}

// Q5. Return [i, j] with i < j and nums[i] + nums[j] === target, or null if no pair works.
// nums is NOT sorted. If several pairs work, return the one whose j is smallest.
// twoSum([2, 7, 11, 15], 9) -> [0, 1]    twoSum([3, 2, 4], 6) -> [1, 2]    twoSum([1, 2], 7) -> null
// Steps:
//   1. const seen = {}   (value -> the index where you saw it)
//   2. for j from 0 to nums.length - 1:
//        const need = target - nums[j]
//        if (need in seen), return [seen[need], j]
//        seen[nums[j]] = j
//   3. return null
//   (Check BEFORE you store nums[j], so a number can't pair with itself.)
export function twoSum(nums, target) {
  throw new Error("TODO");
}

// Q6. Group words by their length. Return an object length -> array of words, in the order they came.
// groupByLength(["hi", "cat", "yo", "dog"]) -> { 2: ["hi", "yo"], 3: ["cat", "dog"] }    groupByLength([]) -> {}
// Steps:
//   1. const groups = {}
//   2. for each word w:
//        const key = w.length
//        if !(key in groups), groups[key] = []
//        groups[key].push(w)
//   3. return groups
export function groupByLength(words) {
  throw new Error("TODO");
}

// Q7. Count the words in a sentence. Words are separated by spaces (there may be extra spaces).
// Return an object word -> count. Treat "The" and "the" as different words.
// countWords("the cat the hat") -> { the: 2, cat: 1, hat: 1 }    countWords("") -> {}
// Steps:
//   1. split the sentence on " "
//   2. skip any empty word "" (extra spaces make those)
//   3. count the rest with the counting idiom from Q1
export function countWords(sentence) {
  throw new Error("TODO");
}

// Q8. The majority element appears MORE than nums.length / 2 times. Return it, or null if there isn't one.
// majorityElement([3, 3, 4, 3]) -> 3    majorityElement([1, 2, 3]) -> null    majorityElement([]) -> null
// Steps:
//   1. count every number with an object
//   2. loop over nums (not over the keys!), and return the first x with count[x] > nums.length / 2
//      Why not the keys? Object keys are always strings, so you'd return "3" instead of 3.
//   3. return null
export function majorityElement(nums) {
  throw new Error("TODO");
}
