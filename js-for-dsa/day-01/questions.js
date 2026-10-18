// JS for DSA · Day 1 · numbers, operators and digits
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `./check.sh 1` to check. Every n here is a whole number >= 0.

// Q1. Return the last digit of n.
// lastDigit(472) -> 2    lastDigit(5) -> 5    lastDigit(0) -> 0
// Steps: the remainder after dividing by 10 is the last digit.
export function lastDigit(n) {
  throw new Error("TODO");
}

// Q2. Return n with its last digit removed.
// removeLastDigit(472) -> 47    removeLastDigit(5) -> 0
// Steps: divide by 10, then throw away the decimal part with Math.floor.
export function removeLastDigit(n) {
  throw new Error("TODO");
}

// Q3. Count how many digits n has. 0 has 1 digit.
// countDigits(472) -> 3    countDigits(7) -> 1    countDigits(0) -> 1
// Steps:
//   1. if n is 0, return 1
//   2. let count = 0
//   3. while n > 0: count++, then remove the last digit of n (your Q2 idea)
//   4. return count
export function countDigits(n) {
  throw new Error("TODO");
}

// Q4. Return the sum of the digits of n.
// sumOfDigits(472) -> 13    sumOfDigits(0) -> 0
// Steps: same loop as Q3, but add the last digit to `sum` instead of counting.
export function sumOfDigits(n) {
  throw new Error("TODO");
}

// Q5. Return the digits of n in reverse order, as a number.
// reverseNumber(472) -> 274    reverseNumber(120) -> 21    reverseNumber(0) -> 0
// Steps:
//   1. let rev = 0
//   2. while n > 0: rev = rev * 10 + (last digit of n), then remove the last digit of n
//   3. return rev
export function reverseNumber(n) {
  throw new Error("TODO");
}

// Q6. Return true if n reads the same forwards and backwards.
// isPalindromeNumber(121) -> true    isPalindromeNumber(123) -> false
// Steps: call your reverseNumber() from Q5 and compare with ===.
export function isPalindromeNumber(n) {
  throw new Error("TODO");
}

// Q7. An Armstrong number equals the sum of its digits, each raised to the power
// of the number of digits. 153 = 1**3 + 5**3 + 3**3, so 153 is one.
// isArmstrong(153) -> true    isArmstrong(9474) -> true    isArmstrong(10) -> false
// Steps:
//   1. const k = countDigits(n)       (Q3)
//   2. loop over the digits like Q4, adding digit ** k to a sum
//   3. return sum === n   (careful: keep a copy of n before the loop changes it)
export function isArmstrong(n) {
  throw new Error("TODO");
}

// Q8. Return the greatest common divisor of a and b (Euclid's algorithm).
// gcd(12, 18) -> 6    gcd(7, 5) -> 1    gcd(10, 0) -> 10
// Steps:
//   1. while b is not 0:
//        const r = a % b;  a = b;  b = r;
//   2. return a
export function gcd(a, b) {
  throw new Error("TODO");
}
