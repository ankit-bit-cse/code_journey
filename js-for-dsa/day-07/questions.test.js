import { check } from "../../scripts/check.js";
import * as q from "./questions.js";

check(q.charFrequency, [[["abca"], { a: 2, b: 1, c: 1 }], [[""], {}], [["z"], { z: 1 }], [["aA a"], { a: 2, A: 1, " ": 1 }]]);
check(q.mostFrequentChar, [[["banana"], "a"], [["abab"], "a"], [[""], null], [["x"], "x"], [["abcbc"], "b"], [["aabbbcc"], "b"]]);
check(q.isAnagram, [
  [["listen", "silent"], true],
  [["abc", "abd"], false],
  [["", ""], true],
  [["ab", "abc"], false],
  [["aab", "abb"], false],
  [["Abc", "cba"], false],
]);
check(q.firstNonRepeatingChar, [[["leetcode"], "l"], [["aabbc"], "c"], [["aabb"], null], [[""], null], [["z"], "z"], [["abcab"], "c"]]);
check(q.twoSum, [
  [[[2, 7, 11, 15], 9], [0, 1]],
  [[[3, 2, 4], 6], [1, 2]],
  [[[1, 2], 7], null],
  [[[], 0], null],
  [[[5], 10], null],
  [[[3, 3], 6], [0, 1]],
  [[[-1, 4, 6, -3], 3], [0, 1]],
  [[[1, 5, 2, 4], 6], [0, 1]],
  [[[0, 8, 0], 0], [0, 2]],
]);
check(q.groupByLength, [
  [[["hi", "cat", "yo", "dog"]], { 2: ["hi", "yo"], 3: ["cat", "dog"] }],
  [[[]], {}],
  [[["a"]], { 1: ["a"] }],
  [[["", "ab", ""]], { 0: ["", ""], 2: ["ab"] }],
]);
check(q.countWords, [
  [["the cat the hat"], { the: 2, cat: 1, hat: 1 }],
  [[""], {}],
  [["hello"], { hello: 1 }],
  [["  a  b a "], { a: 2, b: 1 }],
  [["The the"], { The: 1, the: 1 }],
]);
check(q.majorityElement, [
  [[[3, 3, 4, 3]], 3],
  [[[1, 2, 3]], null],
  [[[]], null],
  [[[7]], 7],
  [[[1, 2, 1, 2]], null],
  [[[-2, -2, 5]], -2],
]);
