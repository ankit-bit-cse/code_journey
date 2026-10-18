import { check } from "../../scripts/check.js";
import * as q from "./questions.js";

check(q.reverseString, [[["abc"], "cba"], [[""], ""], [["a"], "a"], [["hello world"], "dlrow olleh"]]);
check(q.isPalindrome, [[["Racecar"], true], [["abca"], false], [[""], true], [["x"], true], [["Abba"], true], [["ab"], false]]);
check(q.countChar, [[["banana", "a"], 3], [["banana", "z"], 0], [["", "a"], 0], [["Aa", "a"], 1], [["  x ", " "], 3]]);
check(q.capitalizeWords, [[["hello world"], "Hello World"], [[""], ""], [["a"], "A"], [["js is fun"], "Js Is Fun"], [["hello wORLD"], "Hello WORLD"], [["2 cats"], "2 Cats"]]);
check(q.isAllDigits, [[["2024"], true], [["12a"], false], [[""], false], [["0"], true], [["-5"], false], [["1 2"], false]]);
check(q.compress, [[["aaabcc"], "a3b1c2"], [["abc"], "a1b1c1"], [[""], ""], [["z"], "z1"], [["aabbaa"], "a2b2a2"], [["xxxxxxxxxxxx"], "x12"]]);
check(q.longestWord, [[["I love programming"], "programming"], [["cat dog"], "cat"], [[""], ""], [["one"], "one"], [["a bb ccc dd"], "ccc"]]);
check(q.caesarShift, [
  [["abc", 1], "bcd"],
  [["xyz", 2], "zab"],
  [["hi there", 27], "ij uifsf"],
  [["", 5], ""],
  [["abc", 0], "abc"],
  [["Hi!", 1], "Hj!"],
  [["z", 26], "z"],
]);
