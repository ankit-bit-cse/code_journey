import { check } from "../../scripts/check.js";
import * as q from "./questions.js";

check(q.squares, [[[[1, 2, 3]], [1, 4, 9]], [[[]], []], [[[-3]], [9]], [[[0, 10]], [0, 100]]]);
check(q.onlyEvens, [[[[1, 2, 3, 4]], [2, 4]], [[[1, 3]], []], [[[]], []], [[[0, -2, -3]], [0, -2]]]);
check(q.total, [[[[1, 2, 3, 4]], 10], [[[]], 0], [[[5]], 5], [[[-1, 1, -5]], -5]]);

// sortNumbers must not change its input.
const input = [10, 9, 1];
check(q.sortNumbers, [
  [[input], [1, 9, 10]],
  [[[3, -1, 2]], [-1, 2, 3]],
  [[[]], []],
  [[[5]], [5]],
  [[[100, 25, 3, 25]], [3, 25, 25, 100]],
]);
check(function inputUnchanged() {
  q.sortNumbers(input);
  return input;
}, [[[], [10, 9, 1]]]);

check(q.sortByLength, [
  [[["ccc", "a", "bb", "d"]], ["a", "d", "bb", "ccc"]],
  [[[]], []],
  [[["one"]], ["one"]],
  [[["dog", "cat", "ox", "be"]], ["ox", "be", "dog", "cat"]],
]);
check(q.kthLargest, [
  [[[3, 1, 5, 2], 2], 3],
  [[[4, 4, 1], 2], 4],
  [[[7], 1], 7],
  [[[3, 1, 5, 2], 4], 1],
  [[[10, 9, 100, 1], 1], 100],
  [[[-1, -5, -3], 2], -3],
]);
check(q.isAnagramBySort, [
  [["listen", "silent"], true],
  [["abc", "abd"], false],
  [["", ""], true],
  [["a", "a"], true],
  [["aab", "abb"], false],
  [["ab", "abc"], false],
]);
check(q.maxSumWindow, [
  [[[2, 1, 5, 1, 3, 2], 3], 9],
  [[[4], 1], 4],
  [[[1, 2, 3], 3], 6],
  [[[5, -1, 2, 8], 1], 8],
  [[[-4, -2, -7, -1], 2], -6],
  [[[1, 9, 1, 1, 9], 2], 10],
]);
