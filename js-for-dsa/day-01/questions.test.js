import { check } from "../../scripts/check.js";
import * as q from "./questions.js";

check(q.lastDigit, [[[472], 2], [[5], 5], [[0], 0], [[90], 0]]);
check(q.removeLastDigit, [[[472], 47], [[5], 0], [[100], 10]]);
check(q.countDigits, [[[472], 3], [[7], 1], [[0], 1], [[1000], 4]]);
check(q.sumOfDigits, [[[472], 13], [[0], 0], [[9999], 36], [[105], 6]]);
check(q.reverseNumber, [[[472], 274], [[120], 21], [[0], 0], [[7], 7]]);
check(q.isPalindromeNumber, [[[121], true], [[123], false], [[7], true], [[1221], true], [[10], false]]);
check(q.isArmstrong, [[[153], true], [[9474], true], [[10], false], [[5], true], [[100], false]]);
check(q.gcd, [[[12, 18], 6], [[7, 5], 1], [[10, 0], 10], [[0, 9], 9], [[48, 36], 12]]);
