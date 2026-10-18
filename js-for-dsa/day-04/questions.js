// JS for DSA · Day 4 · arrays: traversal and linear search
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `./check.sh 4` to check. Write every loop yourself (no includes or indexOf), and never change arr.

// Q1. Return the sum of all numbers in arr. An empty array sums to 0.
// sumArray([3, 1, 4]) -> 8    sumArray([]) -> 0    sumArray([-2, 2]) -> 0
// Steps: let sum = 0, then for (const x of arr) sum += x. Return sum.
export function sumArray(arr) {
  throw new Error("TODO");
}

// Q2. Return the average of arr. An empty array has average 0.
// average([2, 4, 9]) -> 5    average([7]) -> 7    average([]) -> 0
// Steps: if arr.length is 0 return 0, else return sumArray(arr) / arr.length (your Q1).
export function average(arr) {
  throw new Error("TODO");
}

// Q3. Return the index of the smallest number. If it appears more than once, the
// first one wins. An empty array gives -1.
// indexOfMin([5, 2, 8, 2]) -> 1    indexOfMin([4]) -> 0    indexOfMin([]) -> -1
// Steps:
//   1. if arr is empty, return -1
//   2. let best = 0   (the index of the smallest seen so far)
//   3. for i from 1 to the end: if arr[i] < arr[best], best = i   (< not <=, so the first one wins)
//   4. return best
export function indexOfMin(arr) {
  throw new Error("TODO");
}

// Q4. Return the first index where target appears, or -1 if it is not there.
// linearSearch([7, 3, 9, 3], 3) -> 1    linearSearch([7, 3], 5) -> -1    linearSearch([], 1) -> -1
// Steps: for i from 0 to the end: if arr[i] === target, return i right away.
//        After the loop, return -1 (we looked everywhere).
export function linearSearch(arr, target) {
  throw new Error("TODO");
}

// Q5. Count how many times target appears in arr.
// countOccurrences([1, 2, 1, 1], 1) -> 3    countOccurrences([1, 2], 5) -> 0    countOccurrences([], 1) -> 0
// Steps: like Q4, but instead of returning, count++ and keep going to the end.
export function countOccurrences(arr, target) {
  throw new Error("TODO");
}

// Q6. Return the second largest DIFFERENT value in arr, or null if there isn't one.
// secondLargest([4, 9, 7]) -> 7    secondLargest([5, 5, 3]) -> 3    secondLargest([5, 5]) -> null
// secondLargest([-1, -8]) -> -8    secondLargest([]) -> null
// Steps:
//   1. let first = -Infinity, second = -Infinity
//   2. for each x:
//        if x > first:                     second = first; first = x;   (old best drops to 2nd)
//        else if x < first && x > second:  second = x;
//   3. if second is still -Infinity return null, otherwise return second
export function secondLargest(arr) {
  throw new Error("TODO");
}

// Q7. Return a NEW array of running totals: out[i] = arr[0] + arr[1] + ... + arr[i].
// prefixSums([1, 2, 3, 4]) -> [1, 3, 6, 10]    prefixSums([5]) -> [5]    prefixSums([]) -> []
// Steps:
//   1. const out = [];  let running = 0;
//   2. for each x: running += x; out.push(running);
//   3. return out
export function prefixSums(arr) {
  throw new Error("TODO");
}

// Q8. Return true if every number is >= the one before it (equal neighbours are fine).
// isSorted([1, 2, 2, 5]) -> true    isSorted([3, 1]) -> false    isSorted([]) -> true
// Steps:
//   1. for i from 1 to the end: if arr[i] < arr[i - 1], return false   (one bad pair is enough)
//   2. return true   (start at 1 so arr[i - 1] always exists)
export function isSorted(arr) {
  throw new Error("TODO");
}
