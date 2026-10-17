import { check } from "../../../scripts/check.js";
import * as q from "./questions.js";

check(q.sumTo, [[[4], 10], [[1], 1], [[100], 5050]]);
check(q.countEvensUpTo, [[[10], 5], [[7], 3], [[1], 0]]);
check(q.countOddsUpTo, [[[10], 5], [[7], 4], [[1], 1]]);
check(q.countPositives, [[[[3, -1, 0, 8]], 2], [[[]], 0], [[[-1, -2]], 0]]);
check(q.countEvenOdd, [[[[1, 2, 3, 4, 5]], { even: 2, odd: 3 }], [[[]], { even: 0, odd: 0 }], [[[0, -3]], { even: 1, odd: 1 }]]);
check(q.sumOfEvens, [[[[1, 2, 3, 4]], 6], [[[1, 3]], 0], [[[-2, 10]], 8]]);
check(q.table, [[[3], [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]], [[1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]]);
check(q.factorial, [[[5], 120], [[0], 1], [[1], 1], [[10], 3628800]]);
check(q.reverseString, [[["hello"], "olleh"], [["a"], "a"], [[""], ""]]);
check(q.countDigits, [[[4502], 4], [[7], 1], [[100], 3]]);
