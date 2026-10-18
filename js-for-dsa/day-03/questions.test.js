import { check } from "../../scripts/check.js";
import * as q from "./questions.js";

const double = (v) => v * 2;
const addTen = (v) => v + 10;
const isEven = (v) => v % 2 === 0;
const isNegative = (v) => v < 0;
const always = () => true;

check(q.max2, [[[3, 8], 8], [[-1, -5], -1], [[4, 4], 4], [[0, -2], 0]]);
check(q.max3, [[[3, 9, 5], 9], [[7, 2, 1], 7], [[-4, -2, -8], -2], [[1, 2, 3], 3], [[5, 5, 5], 5]]);
check(q.clamp, [[[15, 0, 10], 10], [[-3, 0, 10], 0], [[7, 0, 10], 7], [[0, 0, 10], 0], [[10, 0, 10], 10], [[-8, -5, -1], -5]]);
check(q.power, [[[2, 5], 32], [[7, 0], 1], [[5], 25], [[-3, 3], -27], [[0, 4], 0], [[10, 1], 10]]);
check(q.sumOfProperDivisors, [[[12], 16], [[7], 1], [[1], 0], [[6], 6], [[28], 28], [[2], 1]]);
check(q.isPerfect, [[[6], true], [[28], true], [[12], false], [[1], false], [[496], true], [[7], false]]);
check(q.applyN, [[[double, 1, 3], 8], [[addTen, 5, 2], 25], [[double, 7, 0], 7], [[double, -1, 4], -16]]);
check(q.countWhere, [[[[1, 2, 3, 4], isEven], 2], [[[5, -1, 0, -7], isNegative], 2], [[[], always], 0], [[[1, 3, 5], isEven], 0], [[[2], always], 1]]);
