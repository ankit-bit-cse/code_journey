import { check } from "../../../scripts/check.js";
import * as q from "./questions.js";

check(q.isEven, [[[4], true], [[7], false], [[0], true], [[-6], true], [[-3], false]]);
check(q.evenOrOdd, [[[10], "even"], [[3], "odd"], [[0], "even"], [[-5], "odd"]]);
check(q.isPositive, [[[5], true], [[0], false], [[-2], false], [[0.5], true]]);
check(q.signOf, [[[9], "positive"], [[-1], "negative"], [[0], "zero"]]);
check(q.largerOfTwo, [[[3, 8], 8], [[8, 3], 8], [[-1, -5], -1], [[4, 4], 4]]);
check(q.largestOfThree, [[[4, 9, 2], 9], [[9, 4, 2], 9], [[2, 4, 9], 9], [[-3, -1, -2], -1], [[5, 5, 1], 5]]);
check(q.grade, [[[95], "A"], [[90], "A"], [[89], "B"], [[75], "B"], [[74], "C"], [[50], "C"], [[49], "F"], [[0], "F"]]);
check(q.isLeapYear, [[[2024], true], [[2023], false], [[1900], false], [[2000], true], [[2100], false]]);
