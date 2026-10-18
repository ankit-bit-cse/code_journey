# JS for DSA · Day 6 · strings

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

### A string is a read-only row of characters

You read it like an array, but you **cannot change it**:

```js
const s = "cat";
s.length;            // 3
s[0];                // "c"
s[s.length - 1];     // "t"
s[0] = "b";          // does nothing! strings are immutable
for (const ch of s) console.log(ch);   // "c", "a", "t"
```

To "change" a string you always **build a new one**.

### Useful methods

```js
"Hello".toLowerCase();        // "hello"
"Hello".toUpperCase();        // "HELLO"
"Hello".slice(1, 4);          // "ell"  (from 1, up to but not including 4)
"Hello".slice(1);             // "ello"
"a b c".split(" ");           // ["a", "b", "c"]
"abc".split("");              // ["a", "b", "c"]
["a", "b", "c"].join("-");    // "a-b-c"
```

### Characters are numbers underneath

Every character has a code. Letters and digits have codes in order, so you can compare them:

```js
"a".charCodeAt(0);          // 97
String.fromCharCode(98);    // "b"
"a" < "b";                  // true
"7" >= "0" && "7" <= "9";   // true: "7" is a digit
```

### Building a string

`out += ch` works and is fine for small strings. For long ones, push pieces into an array and `join("")` once at the end:

```js
let out = "";
for (const ch of "abc") out = ch + out;   // "cba"

const parts = [];
for (const ch of "abc") parts.push(ch.toUpperCase());
parts.join("");                           // "ABC"
```

## DSA connection

Strings are arrays of characters, so everything from Days 4 and 5 works on them: linear scans, two pointers from both ends (palindromes) and counting runs. Because strings are immutable, `s[i] = x` never works: when an algorithm needs to edit in place, turn the string into an array first with `s.split("")`, edit, then `join("")`.

## Questions

Solve them in order in [`questions.js`](questions.js), then run `./check.sh 6`. Each stub has **Steps** comments: try without them first.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `reverseString(s)` | s backwards |
| Q2 | `isPalindrome(s)` | true for `"Racecar"` (ignores case) |
| Q3 | `countChar(s, ch)` | how many times ch appears |
| Q4 | `capitalizeWords(s)` | `"hello world"` → `"Hello World"` |
| Q5 | `isAllDigits(s)` | true for `"2024"`, false for `""` |
| Q6 | `compress(s)` | `"aaabcc"` → `"a3b1c2"` |
| Q7 | `longestWord(s)` | the longest word (first one on a tie) |
| Q8 | `caesarShift(s, k)` | lowercase letters shifted k places |
