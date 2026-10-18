import { check } from "../../scripts/check.js";
import * as q from "./questions.js";

check(q.sumTo, [[[4], 10], [[1], 1], [[0], 0], [[100], 5050]]);
check(q.factorial, [[[5], 120], [[1], 1], [[0], 1], [[10], 3628800]]);
check(q.fibonacci, [[[6], 8], [[1], 1], [[0], 0], [[2], 1], [[10], 55], [[20], 6765]]);
check(q.firstDivisor, [[[15], 3], [[8], 2], [[7], 7], [[2], 2], [[49], 7], [[91], 7]]);
check(q.sumSkipping3, [[[6], 12], [[2], 3], [[0], 0], [[3], 3], [[10], 37]]);
check(q.countPairs, [[[3], 3], [[4], 6], [[1], 0], [[0], 0], [[10], 45]]);
check(q.starRows, [[[3], ["*", "**", "***"]], [[1], ["*"]], [[0], []], [[5], ["*", "**", "***", "****", "*****"]]]);
check(q.isPrime, [[[7], true], [[9], false], [[2], true], [[1], false], [[0], false], [[25], false], [[97], true], [[49], false]]);
