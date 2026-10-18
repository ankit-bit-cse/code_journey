// JS for DSA · Day 5 · arrays in place: swap and two pointers
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `./check.sh 5` to check. "In place" means: change the array you were given, don't build a new one.

// Q1. Swap the values at index i and index j. Change arr itself, then return arr.
// swap([1, 2, 3], 0, 2) -> [3, 2, 1]    swap([5, 6], 1, 1) -> [5, 6]
// Steps: const temp = arr[i]; arr[i] = arr[j]; arr[j] = temp; return arr.
export function swap(arr, i, j) {
  throw new Error("TODO");
}

// Q2. Reverse arr in place and return it. No new array, no .reverse().
// reverseInPlace([1, 2, 3, 4]) -> [4, 3, 2, 1]    reverseInPlace([]) -> []
// Steps:
//   1. let left = 0, right = arr.length - 1
//   2. while left < right: swap(arr, left, right) (Q1), then left++ and right--
//   3. return arr
export function reverseInPlace(arr) {
  throw new Error("TODO");
}

// Q3. Return true if arr reads the same from both ends.
// isPalindromeArray([1, 2, 1]) -> true    isPalindromeArray([1, 2]) -> false    isPalindromeArray([]) -> true
// Steps: same left/right pointers as Q2, but compare instead of swap.
//   As soon as arr[left] !== arr[right], return false. If the pointers meet, return true.
export function isPalindromeArray(arr) {
  throw new Error("TODO");
}

// Q4. Move every 0 to the end, in place. Keep the other numbers in their order. Return arr.
// moveZerosToEnd([0, 1, 0, 3, 12]) -> [1, 3, 12, 0, 0]    moveZerosToEnd([0, 0]) -> [0, 0]
// Steps:
//   1. let write = 0   (the next slot for a non-zero number)
//   2. for each read from 0 to arr.length - 1:
//        if arr[read] !== 0: arr[write] = arr[read]; write++
//   3. now fill every slot from write to the end with 0
//   4. return arr
export function moveZerosToEnd(arr) {
  throw new Error("TODO");
}

// Q5. arr is sorted, so equal values sit next to each other. Rewrite arr in place
// so its first k slots hold each value once, and return k (how many different values).
// countUniqueSorted([1, 1, 2, 3, 3]) -> 3   (arr starts with 1, 2, 3)    countUniqueSorted([]) -> 0
// Steps:
//   1. if arr is empty, return 0
//   2. let write = 1   (arr[0] is always kept)
//   3. for read from 1 to the end:
//        if arr[read] !== arr[write - 1]: arr[write] = arr[read]; write++
//   4. return write
export function countUniqueSorted(arr) {
  throw new Error("TODO");
}

// Q6. sorted is sorted ascending. Return [i, j] with i < j and sorted[i] + sorted[j] === target,
// or null if no pair works.
// pairWithSum([1, 3, 4, 6, 9], 13) -> [2, 4]    pairWithSum([1, 2, 3], 10) -> null
// Steps:
//   1. let left = 0, right = sorted.length - 1
//   2. while left < right:
//        const sum = sorted[left] + sorted[right]
//        if sum === target, return [left, right]
//        if sum < target, left++    (you need a bigger sum)
//        else right--               (you need a smaller sum)
//   3. return null
export function pairWithSum(sorted, target) {
  throw new Error("TODO");
}

// Q7. a and b are both sorted. Return ONE new sorted array with all their values.
// mergeSorted([1, 4, 7], [2, 3, 8]) -> [1, 2, 3, 4, 7, 8]    mergeSorted([], [5]) -> [5]
// Steps:
//   1. const out = []; let i = 0, j = 0
//   2. while i < a.length && j < b.length:
//        push the smaller of a[i] and b[j] into out, and move that pointer on
//        (if they are equal, take a[i] first)
//   3. one array is used up: push everything left in a (from i), then everything left in b (from j)
//   4. return out
export function mergeSorted(a, b) {
  throw new Error("TODO");
}

// Q8. Rotate arr to the right by k steps, in place, and return it.
// The last element moves to the front, k times.
// rotateRight([1, 2, 3, 4, 5], 2) -> [4, 5, 1, 2, 3]    rotateRight([1, 2, 3], 4) -> [3, 1, 2]
// Steps (the "three reverses" trick):
//   1. if arr is empty, return arr. Then k = k % arr.length (rotating by length changes nothing)
//   2. write a helper reverseRange(arr, lo, hi) that reverses only arr[lo..hi], like Q2
//   3. reverse the whole array:          [5, 4, 3, 2, 1]
//   4. reverse the first k values:       [4, 5, 3, 2, 1]
//   5. reverse the rest (k to the end):  [4, 5, 1, 2, 3]
export function rotateRight(arr, k) {
  throw new Error("TODO");
}
