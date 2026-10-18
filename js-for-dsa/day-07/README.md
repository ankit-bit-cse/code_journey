# JS for DSA · Day 7 · objects as hash maps

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

### An object is a set of key → value pairs

```js
const age = { ann: 31, bob: 25 };
age.ann;          // 31   dot access: the key is written in the code
age["bob"];       // 25   bracket access: the key can be any expression
age.cat;          // undefined (missing key, no error)
age.cat = 4;      // add a new key
```

### Dynamic keys need brackets

When the key is inside a variable, you **must** use brackets:

```js
const name = "ann";
age[name];        // 31
age.name;         // undefined! this looks for a key literally called "name"
```

### Is the key there?

```js
"ann" in age;              // true
"zed" in age;              // false
age.zed === undefined;     // true (also works, unless a value really is undefined)
```

### The counting idiom

The most useful line of the day. A missing key gives `undefined`, and `undefined || 0` is `0`:

```js
const count = {};
for (const ch of "banana") {
  count[ch] = (count[ch] || 0) + 1;
}
// { b: 1, a: 3, n: 2 }
```

### Looping over an object

```js
Object.keys(count);      // ["b", "a", "n"]
Object.values(count);    // [1, 3, 2]
Object.entries(count);   // [["b", 1], ["a", 3], ["n", 2]]
for (const key in count) console.log(key, count[key]);
```

### Keys are always strings

```js
const seen = {};
seen[7] = true;
Object.keys(seen);       // ["7"]  the number became a string
```

## DSA connection

Looking up a key in an object takes about the same time no matter how big the object is: **O(1)** on average. That turns "search the whole array again" (O(n) per lookup, O(n²) total) into one pass with a map (O(n) total). Counting, "have I seen this before?" and grouping are the three most common hash map patterns in DSA.

## Questions

Solve them in order in [`questions.js`](questions.js), then run `./check.sh 7`. Each stub has **Steps** comments: try without them first.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `charFrequency(s)` | `{ char: count }` |
| Q2 | `mostFrequentChar(s)` | the most common char (first on a tie), or `null` |
| Q3 | `isAnagram(a, b)` | true for `"listen"`, `"silent"` |
| Q4 | `firstNonRepeatingChar(s)` | the first char that appears once, or `null` |
| Q5 | `twoSum(nums, target)` | `[i, j]` or `null`, using a "seen" object |
| Q6 | `groupByLength(words)` | `{ length: [words] }` |
| Q7 | `countWords(sentence)` | `{ word: count }` |
| Q8 | `majorityElement(nums)` | the value seen more than n / 2 times, or `null` |
