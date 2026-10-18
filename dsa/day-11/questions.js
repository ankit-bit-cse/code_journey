// DSA · Day 11 · binary search on tricky arrays
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `./check.sh dsa 11` to check. Every answer today is O(log n): no loop over the whole array,
// and no indexOf, includes, find, findIndex or Math.min(...arr).

// Q1. Versions 1, 2, ..., n of a program were released. At some point one version broke, and every version
// after it is broken too. isBad(v) tells you whether version v is broken (it's a function you call).
// Return the FIRST bad version. There is always at least one bad version.
// isBad is slow, so call it as few times as you can: the test counts the calls (about log2(n) allowed).
// firstBadVersion(5, (v) => v >= 4) -> 4    firstBadVersion(1, (v) => v >= 1) -> 1
// Pattern: lower bound (Day 10, Q2), but on a yes/no question instead of an array.
// Steps:
//   1. The versions in order look like: good, good, good, bad, bad. You want the first "bad".
//   2. lo = 1, hi = n   (the answer is somewhere in [lo, hi], and n is surely bad)
//   3. While lo < hi:
//        a. mid = Math.floor((lo + hi) / 2)
//        b. if isBad(mid), mid COULD be the first bad one, so keep it: hi = mid
//        c. otherwise mid is good, so the first bad one is after it: lo = mid + 1
//   4. Return lo (lo === hi now).
// Invariant: the first bad version is always inside [lo, hi].
export function firstBadVersion(n, isBad) {
  throw new Error("TODO");
}

// Q2. matrix has rows sorted left to right, and the first number of each row is bigger than the last number
// of the row above. So read row by row, it is ONE sorted list. Return true if x is in it, else false.
// searchMatrix([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 9) -> true    searchMatrix([[1, 3], [5, 7]], 4) -> false
// searchMatrix([], 1) -> false
// Pattern: binary search on a 2D grid treated as a flat array of rows * cols items. Aim for O(log(rows * cols)).
// Steps:
//   1. If there are no rows, or the first row is empty, return false.
//   2. rows = matrix.length, cols = matrix[0].length. The flat indices go from 0 to rows * cols - 1.
//   3. Do the classic closed binary search (lo <= hi) over those flat indices.
//   4. To read flat index k: its row is Math.floor(k / cols) and its column is k % cols.
//      (Check on [[1, 3, 5], [7, 9, 11]]: k = 4 -> row 1, column 1 -> 9.)
//   5. Found it: return true. Loop ended: return false.
export function searchMatrix(matrix, x) {
  throw new Error("TODO");
}

// Q3. A peak is an element bigger than its neighbours (outside the array counts as -Infinity).
// In this question the array goes up, then down (or only up, or only down), and no two neighbours are equal,
// so there is exactly ONE peak. Return its index.
// findPeak([1, 3, 8, 12, 4, 2]) -> 3    findPeak([1, 2, 3]) -> 2    findPeak([5, 3, 1]) -> 0    findPeak([7]) -> 0
// Key idea: compare arr[mid] with arr[mid + 1]. If the next one is bigger, you are walking uphill. Where is the top?
// Steps:
//   1. lo = 0, hi = arr.length - 1, and loop while lo < hi (so mid + 1 is always inside the array).
//   2. arr[mid] < arr[mid + 1]: uphill to the right, so the peak is after mid. Which bound moves?
//   3. Otherwise you are going downhill: mid itself could be the peak. Keep it.
// Invariant: a peak is always inside [lo, hi].
export function findPeak(arr) {
  throw new Error("TODO");
}

// Q4. A sorted array of DIFFERENT numbers was rotated: some items from the end were moved to the front,
// like [1, 2, 3, 4, 5] -> [4, 5, 1, 2, 3]. Return the smallest value.
// findMinRotated([4, 5, 6, 7, 0, 1, 2]) -> 0    findMinRotated([2, 3, 1]) -> 1    findMinRotated([1, 2, 3]) -> 1
// Key idea: compare arr[mid] with the LAST item of the range, arr[hi].
// Steps:
//   1. lo = 0, hi = arr.length - 1, while lo < hi.
//   2. If arr[mid] > arr[hi], the drop (where the numbers fall from big to small) is to the right of mid,
//      and mid is not the minimum. If arr[mid] < arr[hi], mid..hi is sorted, so the minimum is mid or to its left.
//   3. At the end, arr[lo] is the minimum.
// Guiding question: why compare with arr[hi] and not arr[lo]? Try [1, 2, 3] (not rotated) both ways.
export function findMinRotated(arr) {
  throw new Error("TODO");
}

// Q5. Same kind of array as Q4. Return how many times the sorted array was rotated to the right
// (each rotation moves the last item to the front). A sorted array was rotated 0 times.
// rotationCount([4, 5, 6, 7, 0, 1, 2]) -> 4    rotationCount([1, 2, 3]) -> 0    rotationCount([3, 1, 2]) -> 1
// Key idea: look at where the smallest item ended up. It started at index 0 and moved one place per rotation.
// Steps:
//   1. Reuse the loop from Q4, but this time keep the INDEX, not the value.
//   2. Better: make Q4 call this one, so the binary search lives in one place.
export function rotationCount(arr) {
  throw new Error("TODO");
}

// Q6. Same kind of array as Q4 (different numbers, rotated). Return the index of x, or -1.
// searchRotated([4, 5, 6, 7, 0, 1, 2], 0) -> 4    searchRotated([4, 5, 6, 7, 0, 1, 2], 3) -> -1    searchRotated([1], 1) -> 0
// Pattern: classic binary search plus one question every step: WHICH HALF IS SORTED?
// Guiding questions:
//   - Cut at mid. At least one of [lo..mid] and [mid..hi] is sorted. How does comparing arr[lo] and arr[mid] tell you which?
//   - Once you know the sorted half, checking "is x inside it?" is easy: compare x with its two ends.
//     If x is inside, search there. If not, it can only be in the other half.
// Invariant: if x is in the array, it is inside [lo, hi].
// Dry run: [4, 5, 6, 7, 0, 1, 2], x = 0 -> mid 3 (7): left [4..7] sorted, 0 not in it, go right -> lo 4, mid 5 (1):
//          left [0..1] sorted, 0 is in it, go left -> mid 4 (0): found, return 4.
export function searchRotated(arr, x) {
  throw new Error("TODO");
}

// Q7. A sorted array where every number appears exactly twice, except one number that appears once.
// Return that number. Aim for O(log n): a loop with XOR would be O(n).
// singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]) -> 2    singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]) -> 10    singleNonDuplicate([5]) -> 5
// Pattern: binary search on a pattern, not a value. Look at the pairs' positions.
// Guiding questions: BEFORE the single number, where does each pair start: at an even or an odd index? And AFTER it?
// If you make mid even, what does arr[mid] === arr[mid + 1] tell you about where the single number is?
// Invariant: the single number is inside [lo, hi], and lo is always even.
// Dry run: [1, 1, 2, 3, 3] -> lo 0, hi 4, mid 2 (even): arr[2] = 2, arr[3] = 3, not a pair, so the single is at 2 or left:
//          hi = 2 -> mid 1, make it even: 0. arr[0] === arr[1], a pair, so the single is after it: lo = 2 -> lo === hi, return arr[2].
export function singleNonDuplicate(arr) {
  throw new Error("TODO");
}

// Q8. A "nearly sorted" array: it was sorted, then some items were swapped with a NEIGHBOUR (each item is at
// most one place away from where it belongs). All numbers are different. Return the index of x, or -1.
// searchNearlySorted([10, 3, 40, 20, 50, 80, 70], 40) -> 2    searchNearlySorted([10, 3, 40, 20, 50, 80, 70], 90) -> -1
// Pattern: classic binary search, but each step checks three places.
// Guiding questions: x might be at mid - 1, mid or mid + 1. Check all three (stay inside [lo, hi]!).
// If none of them is x and arr[mid] < x, how far right can you safely jump? Is mid + 1 enough, or can you skip one more?
// Invariant: if x is in the array, it is inside [lo, hi].
export function searchNearlySorted(arr, x) {
  throw new Error("TODO");
}
