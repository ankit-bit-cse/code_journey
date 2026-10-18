// DSA · Day 3 · thinking recursively
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `./check.sh dsa 3` to check. Today's rule: no `for` or `while` loops, only recursion. Also no
// `.reverse()`, `toString(2)`, `**` or `Math.pow`. Every n, e here is a whole number >= 0.
// For every question, say the three parts out loud first: base case, smaller problem, how to use its answer.

// Q1. Return the sum of the digits of n, recursively.
// sumDigitsRec(472) -> 13    sumDigitsRec(7) -> 7    sumDigitsRec(0) -> 0
// Base case: n === 0, the sum is 0.
// Steps:
//   1. If n is 0, return 0.
//   2. The last digit is n % 10. The rest of the number is Math.floor(n / 10).
//   3. Trust: sumDigitsRec(rest) gives you the sum of the other digits. Don't trace it in your head.
//   4. Return last digit + that answer.
// Dry run: sumDigitsRec(472) = 2 + sumDigitsRec(47) = 2 + 7 + sumDigitsRec(4) = 2 + 7 + 4 + sumDigitsRec(0) = 13.
export function sumDigitsRec(n) {
  throw new Error("TODO");
}

// Q2. Return the array [n, n - 1, ..., 1]. For n = 0 return [].
// countDownList(3) -> [3, 2, 1]    countDownList(1) -> [1]    countDownList(0) -> []
// Base case: n === 0 gives an empty list.
// Steps:
//   1. If n is 0, return [].
//   2. Trust: countDownList(n - 1) already gives [n - 1, ..., 1].
//   3. You only need to put n in FRONT of that list. Build a new array: [n, ...rest].
//   4. Check n = 1: [1, ...[]] is [1].
export function countDownList(n) {
  throw new Error("TODO");
}

// Q3. Return the greatest common divisor of a and b, recursively (Euclid).
// gcdRec(12, 18) -> 6    gcdRec(7, 5) -> 1    gcdRec(10, 0) -> 10
// Key idea: gcd(a, b) is the same as gcd(b, a % b), and the numbers shrink fast.
// Base case: b === 0, the answer is a.
// Steps:
//   1. Write the base case first.
//   2. Otherwise return the answer of the smaller problem: which two numbers do you pass?
// Dry run: gcdRec(12, 18) -> gcdRec(18, 12) -> gcdRec(12, 6) -> gcdRec(6, 0) -> 6.
export function gcdRec(a, b) {
  throw new Error("TODO");
}

// Q4. Return s backwards, recursively.
// stringReverseRec("abc") -> "cba"    stringReverseRec("a") -> "a"    stringReverseRec("") -> ""
// Key idea: the reverse of s is (the reverse of everything after the first letter) + the first letter.
// Steps:
//   1. Base case: what is the reverse of a string with 0 letters? (1 letter works too.)
//   2. s.slice(1) is s without its first letter. Trust that the recursive call reverses it.
//   3. Where does s[0] go: in front of that answer, or behind it?
//   (Each slice copies the string, so this is O(n²) for long strings. Fine for today; Day 4 shows the fix.)
export function stringReverseRec(s) {
  throw new Error("TODO");
}

// Q5. Return n written in binary, as a string.
// binaryOf(5) -> "101"    binaryOf(8) -> "1000"    binaryOf(0) -> "0"    binaryOf(1) -> "1"
// Key idea: n % 2 is the LAST binary digit, and Math.floor(n / 2) is all the digits before it.
// (Same shape as Q1, with 2 instead of 10.)
// Steps:
//   1. Base case: n < 2. Then n is a single binary digit: return it as a string, String(n).
//   2. Otherwise the answer is (binary of the rest) followed by (last digit). Glue them as strings.
//   3. Why is the base case n < 2 and not n === 0? Try binaryOf(1) both ways.
export function binaryOf(n) {
  throw new Error("TODO");
}

// Q6. Return how many times x appears in arr, recursively.
// countOccurrencesRec([1, 2, 1, 1], 1) -> 3    countOccurrencesRec([], 4) -> 0    countOccurrencesRec(["a"], "b") -> 0
// Pattern: "first item + the rest". Add an index parameter with a default value so you don't copy
// the array:  function countOccurrencesRec(arr, x, i = 0)
// Guiding questions: when has the index run past the end? What does the current item add to the count
// (0 or 1), and which call counts the rest?
// Base case: i === arr.length, nothing left to count.
export function countOccurrencesRec(arr, x) {
  throw new Error("TODO");
}

// Q7. Return true if s reads the same forwards and backwards, recursively.
// isPalindromeRec("racecar") -> true    isPalindromeRec("abca") -> false    isPalindromeRec("") -> true
// Pattern: two pointers, but recursion moves them. Use lo and hi parameters with defaults
// (lo = 0, hi = s.length - 1) and do not slice.
// Guiding questions: if the two outer letters differ, do you need to look further? If they match,
// which smaller string is left to check?
// Base case: lo >= hi (zero or one letter left), which is always a palindrome.
export function isPalindromeRec(s) {
  throw new Error("TODO");
}

// Q8. Return b to the power e in O(log e) multiplications. e >= 0. (b ** 0 is 1, even for b = 0.)
// powerFast(2, 10) -> 1024    powerFast(3, 5) -> 243    powerFast(7, 0) -> 1    powerFast(-2, 3) -> -8
// Pattern: fast power (halve the exponent). The slow version, b * power(b, e - 1), makes e calls.
// Guiding questions: if you knew half = powerFast(b, Math.floor(e / 2)), how do you get b^e from it
// when e is even? And when e is odd, what is missing? Why must you call it only ONCE and reuse half?
// Base case: e === 0 returns 1.
// Dry run: powerFast(3, 5): half = powerFast(3, 2) = 9, e is odd, so 9 * 9 * 3 = 243.
export function powerFast(b, e) {
  throw new Error("TODO");
}
