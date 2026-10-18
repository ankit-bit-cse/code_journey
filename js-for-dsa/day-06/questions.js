// JS for DSA · Day 6 · strings
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `./check.sh 6` to check. Write the loops yourself: no .reverse(), no regular expressions.

// Q1. Return s backwards.
// reverseString("abc") -> "cba"    reverseString("") -> ""
// Steps: start with out = "", walk i from s.length - 1 down to 0, and add s[i] to out.
export function reverseString(s) {

  let out="";

  for(let i= s.length-1;i>=0;i--){
    out=out+s[i];
  }

  return out;

  throw new Error("TODO");
}

// Q2. Return true if s reads the same forwards and backwards, ignoring upper/lower case.
// isPalindrome("Racecar") -> true    isPalindrome("abca") -> false    isPalindrome("") -> true
// Steps: lower-case s once with toLowerCase(), then use left/right pointers like Day 5
//   (or compare with your reverseString() from Q1).
export function isPalindrome(s) {


  let reversestr="";

  for(let i= s.length-1;i>=0;i--){
   reversestr=reversestr+s[i];
  }


  if(reversestr.toLocaleLowerCase()===s.toLocaleLowerCase()) {
    return true;
  }
  else {
    return false;
  }

  // throw new Error("TODO");
}

// Q3. Count how many times the single character ch appears in s.
// countChar("banana", "a") -> 3    countChar("banana", "z") -> 0
// Steps: let count = 0; for (const c of s) { if (c === ch) count++; } return count.
export function countChar(s, ch) {
  throw new Error("TODO");
}

// Q4. Make the first letter of every word upper case. Words are separated by single spaces.
// Leave the other letters as they are.
// capitalizeWords("hello world") -> "Hello World"    capitalizeWords("") -> ""
// Steps:
//   1. const words = s.split(" ")
//   2. for each word w: if w is not empty, replace it with w[0].toUpperCase() + w.slice(1)
//   3. return words.join(" ")
export function capitalizeWords(s) {
  throw new Error("TODO");
}

// Q5. Return true if s is not empty and every character is a digit "0".."9".
// isAllDigits("2024") -> true    isAllDigits("12a") -> false    isAllDigits("") -> false
// Steps:
//   1. if s is empty, return false
//   2. for each char c: if c < "0" or c > "9", return false   (chars compare by their codes)
//   3. return true
export function isAllDigits(s) {
  throw new Error("TODO");
}

// Q6. Compress runs of the same character: each char followed by how many times it repeats in a row.
// compress("aaabcc") -> "a3b1c2"    compress("abc") -> "a1b1c1"    compress("") -> ""
// Steps:
//   1. if s is empty, return ""
//   2. const parts = []; let count = 1
//   3. for i from 1 to s.length (yes, one past the end):
//        if i < s.length and s[i] === s[i - 1], count++
//        else: the run of s[i - 1] just ended, so parts.push(s[i - 1] + count) and set count = 1
//   4. return parts.join("")
export function compress(s) {
  throw new Error("TODO");
}

// Q7. Return the longest word in a sentence (words separated by single spaces).
// If there's a tie, return the one that comes first.
// longestWord("I love programming") -> "programming"    longestWord("cat dog") -> "cat"    longestWord("") -> ""
// Steps: let best = ""; for each word of s.split(" "): if word.length > best.length, best = word.
//   (Use > and not >= so the first one wins a tie.)
export function longestWord(s) {
  throw new Error("TODO");
}

// Q8. Shift every lowercase letter k places forward in the alphabet, wrapping z back to a.
// Anything that is not a lowercase letter stays the same. k is a whole number >= 0.
// caesarShift("abc", 1) -> "bcd"    caesarShift("xyz", 2) -> "zab"    caesarShift("hi there", 27) -> "ij uifsf"
// Steps:
//   1. const parts = []
//   2. for each char c of s:
//        if c >= "a" && c <= "z":
//          const pos = c.charCodeAt(0) - 97          ("a" is code 97, so pos is 0..25)
//          const newPos = (pos + k) % 26              (wraps around)
//          parts.push(String.fromCharCode(newPos + 97))
//        else parts.push(c)
//   3. return parts.join("")
export function caesarShift(s, k) {
  throw new Error("TODO");
}
