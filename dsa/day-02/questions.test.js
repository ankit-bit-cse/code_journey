import { check } from "../../scripts/check.js";
import * as q from "./questions.js";

const big = Array.from({ length: 300 }, (_, i) => i * 3 - 400);

check(q.containsDuplicate, [
  [[[1, 2, 3, 1]], true],
  [[[1, 2, 3]], false],
  [[[]], false],
  [[[5]], false],
  [[[-1, -1]], true],
  [[["a", "b", "a"]], true],
  [[big], false],
  [[[...big, 50]], true],
]);
check(q.isSubsequence, [
  [["ace", "abcde"], true],
  [["aec", "abcde"], false],
  [["", "abc"], true],
  [["", ""], true],
  [["a", ""], false],
  [["abc", "abc"], true],
  [["aa", "ab"], false],
  [["aab", "xaxaxb"], true],
  [["abcd", "abc"], false],
]);
check(q.firstUniqueIndex, [
  [[[4, 5, 4, 6, 5]], 3],
  [[["a", "b", "a"]], 1],
  [[[2, 2]], -1],
  [[[]], -1],
  [[[9]], 0],
  [[[1, 2, 3]], 0],
  [[[-1, 3, -1, 3, 0]], 4],
]);
check(q.mostFrequent, [
  [[[3, 1, 3, 2, 1]], 1],
  [[[7]], 7],
  [[[]], null],
  [[[5, 5, 2]], 5],
  [[[4, 3, 2, 1]], 1],
  [[[-2, 8, -2, 8, -5]], -2],
  [[[0, 0, 0, 9, 9, 9, 9]], 9],
]);
check(q.maxProfit, [
  [[[7, 1, 5, 3, 6, 4]], 5],
  [[[7, 6, 4, 1]], 0],
  [[[]], 0],
  [[[5]], 0],
  [[[1, 2, 3, 4, 5]], 4],
  [[[3, 3, 3]], 0],
  [[[2, 9, 1, 5]], 7],
  [[[4, 9, 1, 7]], 6],
]);
check(q.rangeSums, [
  [[[2, 4, 1, 3], [[0, 1], [1, 3], [2, 2]]], [6, 8, 1]],
  [[[5], []], []],
  [[[5], [[0, 0]]], [5]],
  [[[-3, 2, -1, 4], [[0, 3], [0, 0], [1, 2], [3, 3]]], [2, -3, 1, 4]],
  [[[1, 1, 1, 1, 1], [[0, 4], [0, 4], [2, 3]]], [5, 5, 2]],
  [[big, [[0, 299], [1, 1], [150, 151]]], [14550, -397, 103]],
]);

// The tests run this one with .sort() switched off, to make sure you merge by hand.
check(function mergeSortedNoSort(a, b) {
  const original = Array.prototype.sort;
  Array.prototype.sort = () => { throw new Error("no .sort() today: merge with two pointers"); };
  try {
    return q.mergeSortedNoSort(a, b);
  } finally {
    Array.prototype.sort = original;
  }
}, [
  [[[1, 4, 9], [2, 3, 10]], [1, 2, 3, 4, 9, 10]],
  [[[], [1]], [1]],
  [[[1], []], [1]],
  [[[], []], []],
  [[[1, 2, 3], [4, 5]], [1, 2, 3, 4, 5]],
  [[[4, 5], [1, 2, 3]], [1, 2, 3, 4, 5]],
  [[[1, 3, 3], [3, 4]], [1, 3, 3, 3, 4]],
  [[[-5, 0], [-6, -1, 7]], [-6, -5, -1, 0, 7]],
]);

// The tests give your function a copy of arr, then look at k and at the first k slots.
check(function removeDuplicatesInPlace(arr) {
  const copy = arr.slice();
  const k = q.removeDuplicatesInPlace(copy);
  return { k, front: copy.slice(0, k) };
}, [
  [[[1, 1, 2, 3, 3]], { k: 3, front: [1, 2, 3] }],
  [[[]], { k: 0, front: [] }],
  [[[4]], { k: 1, front: [4] }],
  [[[2, 2, 2, 2]], { k: 1, front: [2] }],
  [[[1, 2, 3]], { k: 3, front: [1, 2, 3] }],
  [[[-3, -3, -1, 0, 0, 0, 5]], { k: 4, front: [-3, -1, 0, 5] }],
]);
