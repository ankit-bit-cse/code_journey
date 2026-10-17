import { check } from "../../../scripts/check.js";
import * as q from "./questions.js";

check(q.rectangleArea, [[[4, 5], 20], [[1, 1], 1], [[0, 9], 0]]);
check(q.celsiusToFahrenheit, [[[100], 212], [[0], 32], [[-40], -40]]);
check(q.isVowel, [[["a"], true], [["E"], true], [["b"], false], [["z"], false], [["U"], true]]);
check(q.greet, [[["Riya"], "Hello, Riya!"], [["Aman"], "Hello, Aman!"]]);
check(q.typeName, [[[5], "number"], [["hi"], "string"], [[true], "boolean"], [[[1, 2]], "array"], [[undefined], "undefined"]]);
check(q.maxOfArray, [[[[3, 9, 2]], 9], [[[-5, -2, -8]], -2], [[[7]], 7]]);
check(q.countVowels, [[["Programming"], 3], [["AEIOU"], 5], [["xyz"], 0]]);
check(q.isPrime, [[[7], true], [[9], false], [[2], true], [[1], false], [[0], false], [[97], true]]);
check(q.primesUpTo, [[[10], [2, 3, 5, 7]], [[2], [2]], [[1], []]]);
