// DSA · Day 10 · binary search templates
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `./check.sh dsa 10` to check. Every answer today is a binary search: no indexOf, lastIndexOf,
// includes, find, findIndex or filter, and no loop that walks over every item.

// Q1. Run the classic binary search for x and return the list of mid INDICES it looked at, in order.
// Use exactly this version: lo = 0, hi = arr.length - 1, while (lo <= hi), mid = Math.floor((lo + hi) / 2),
// stop as soon as arr[mid] === x, otherwise move lo or hi past mid.
// binarySearchSteps([1, 3, 5, 7, 9, 11, 13], 11) -> [3, 5]    binarySearchSteps([1, 3, 5, 7, 9, 11, 13], 4) -> [3, 1, 2]
// binarySearchSteps([], 5) -> []
// Steps:
//   1. Make an empty list `seen`. Set lo to 0 and hi to the last index.
//   2. While lo <= hi (there is at least one index left to check):
//        a. work out mid with Math.floor((lo + hi) / 2) and push it onto `seen`
//        b. if arr[mid] is x, stop the loop (break)
//        c. if arr[mid] is smaller than x, everything up to mid is too small: lo = mid + 1
//        d. otherwise everything from mid up is too big: hi = mid - 1
//   3. Return `seen`.
// Invariant: if x is in the array, it is inside [lo, hi] (both ends included).
// Check: on an array of 7 items the list is never longer than 3. Why?
export function binarySearchSteps(arr, x) {
  throw new Error("TODO");
}

// Q2. Lower bound: return the index of the FIRST element >= x, or arr.length if there is none.
// lowerBound([1, 3, 3, 5], 3) -> 1    lowerBound([1, 3, 3, 5], 4) -> 3    lowerBound([1, 2], 9) -> 2    lowerBound([], 7) -> 0
// Pattern: binary search "lower bound" (the half-open template). Aim for O(log n).
// Steps:
//   1. lo = 0, hi = arr.length   (hi is one PAST the end, because the answer can be arr.length)
//   2. While lo < hi (more than one possible answer is left):
//        a. mid = Math.floor((lo + hi) / 2)
//        b. if arr[mid] >= x, mid COULD be the answer, so keep it in the range: hi = mid
//        c. otherwise arr[mid] is too small, so the answer is to the right of mid: lo = mid + 1
//   3. When the loop ends, lo === hi. That one index is the answer: return it.
// Invariant: the answer is always inside [lo, hi].
// Why `hi = mid` and not `hi = mid - 1`? Because mid itself might be the first element >= x.
export function lowerBound(arr, x) {
  throw new Error("TODO");
}

// Q3. Upper bound: return the index of the first element STRICTLY greater than x, or arr.length.
// upperBound([1, 3, 3, 5], 3) -> 3    upperBound([1, 3, 3, 5], 0) -> 0    upperBound([1, 3, 3, 5], 5) -> 4
// Key idea: it is Q2 with ONE character changed. Aim for O(log n).
// Steps:
//   1. Copy the shape of lowerBound: lo = 0, hi = arr.length, while lo < hi.
//   2. Which elements COULD be the answer now? Only ones that are > x. Keep mid when arr[mid] > x.
//   3. Return lo.
// Edge cases to check: x smaller than everything, x bigger than everything, every element equal to x.
export function upperBound(arr, x) {
  throw new Error("TODO");
}

// Q4. Return the index of the FIRST x in the sorted array, or -1 if x isn't there.
// firstOccurrence([2, 4, 4, 4, 6], 4) -> 1    firstOccurrence([2, 4, 6], 5) -> -1    firstOccurrence([], 1) -> -1
// Key idea: lowerBound(arr, x) already points at the first element >= x. Is that element x?
// Steps:
//   1. i = lowerBound(arr, x)   (reuse Q2)
//   2. Two ways it can fail: i is arr.length (off the end), or arr[i] is bigger than x.
//   3. Otherwise i is the answer.
export function firstOccurrence(arr, x) {
  throw new Error("TODO");
}

// Q5. Return the index of the LAST x in the sorted array, or -1 if x isn't there.
// lastOccurrence([2, 4, 4, 4, 6], 4) -> 3    lastOccurrence([4, 4], 4) -> 1    lastOccurrence([2, 6], 4) -> -1
// Key idea: upperBound(arr, x) points just PAST the last x. So where is the last x?
// Steps:
//   1. i = (something with upperBound from Q3)
//   2. When does i not hold x? Think about i === -1 and about arr[i] being smaller than x.
export function lastOccurrence(arr, x) {
  throw new Error("TODO");
}

// Q6. Return how many times x appears in the sorted array. Aim for O(log n): don't count one by one.
// countOccurrences([1, 2, 2, 2, 3], 2) -> 3    countOccurrences([1, 3], 2) -> 0    countOccurrences([], 2) -> 0
// Pattern: lower bound + upper bound. The x's sit in a block. Where does the block start, and where does it end?
// Guiding question: what is upperBound - lowerBound when x is missing? (Try [1, 3] and x = 2 on paper.)
export function countOccurrences(arr, x) {
  throw new Error("TODO");
}

// Q7. arr is sorted and has NO duplicates. Return the index of x if it is there, otherwise the index where x
// would be inserted to keep the array sorted.
// searchInsertPosition([1, 3, 5, 6], 5) -> 2    searchInsertPosition([1, 3, 5, 6], 2) -> 1    searchInsertPosition([1, 3, 5, 6], 7) -> 4
// This one has a rule: do NOT call lowerBound. Write it with the CLOSED template from Q1 (lo <= hi, hi = length - 1).
// Pattern: closed-range binary search, and read lo after the loop.
// Guiding questions: when the loop ends without finding x, lo === hi + 1. Every index before lo held a value
// smaller than x and every index after hi held a value bigger. So what is lo?
// Dry run: [1, 3, 5, 6], x = 2 -> mid 1 (3 > 2, hi = 0) -> mid 0 (1 < 2, lo = 1) -> loop ends, lo = 1.
export function searchInsertPosition(arr, x) {
  throw new Error("TODO");
}

// Q8. Return the floor of x: the LARGEST element <= x, or null if every element is bigger than x.
// floorInSorted([1, 2, 8, 10, 10, 12, 19], 5) -> 2    floorInSorted([1, 2, 8], 8) -> 8    floorInSorted([4, 6], 3) -> null
// Pattern: binary search that remembers the best answer so far (`ans`). Aim for O(log n).
// Guiding questions: when arr[mid] <= x, mid is a possible answer, but could there be a bigger one? Which side?
// When arr[mid] > x, can mid or anything to its right be the answer?
// Invariant: `ans` is the best floor found so far, and any better one is inside [lo, hi].
// Dry run: [1, 2, 8, 10], x = 5 -> mid 1 (2 <= 5: ans = 2, go right) -> mid 2 (8 > 5: go left) -> lo > hi, return 2.
export function floorInSorted(arr, x) {
  throw new Error("TODO");
}
