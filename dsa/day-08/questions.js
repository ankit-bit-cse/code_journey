// DSA · Day 8 · merge sort
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `./check.sh dsa 8` to check. No `.sort()` anywhere today, and never change the input arrays.

// Q1. a and b are sorted ascending. Return ONE new sorted array with all their values.
// merge([1, 4, 9], [2, 3, 10]) -> [1, 2, 3, 4, 9, 10]    merge([], [5]) -> [5]    merge([2, 2], [2]) -> [2, 2, 2]
// Pattern: two pointers, one per array.
// Steps:
//   1. out = [], i = 0 (into a), j = 0 (into b)
//   2. while BOTH i < a.length and j < b.length:
//        push the smaller of a[i] and b[j] onto out, and move THAT pointer on.
//        On a tie, take a[i] (this keeps merge sort stable).
//   3. One array is used up. Push everything left in the other one (a loop each; one of them won't run).
//   4. return out
// Dry run: merge([1, 4], [2, 3]) -> take 1 (i=1), take 2 (j=1), take 3 (j=2), b is empty, copy 4 -> [1, 2, 3, 4]
export function merge(a, b) {
  throw new Error("TODO");
}

// Q2. Return a NEW array with arr's values in ascending order, using merge sort. Aim for O(n log n).
// mergeSort([5, 2, 4, 1, 3]) -> [1, 2, 3, 4, 5]    mergeSort([]) -> []    mergeSort([7]) -> [7]
// Pattern: divide and conquer.
// Steps:
//   1. Base case: if arr.length <= 1, it's already sorted: return a copy (arr.slice()).
//   2. mid = Math.floor(arr.length / 2)
//   3. left = arr.slice(0, mid), right = arr.slice(mid)
//   4. Trust the recursion: sort each half with mergeSort.
//   5. return merge(sortedLeft, sortedRight)   (your Q1)
// Check: what would happen with no base case? (mergeSort([7]) -> halves [] and [7] -> forever)
export function mergeSort(arr) {
  throw new Error("TODO");
}

// Q3. Merge sort splits n items in half (left gets Math.floor(n / 2), right gets the rest),
// then splits each half, and so on until every piece has 0 or 1 item.
// Return how many LEVELS of splitting that takes: the depth of the recursion tree.
// mergeSortLevels(1) -> 0    mergeSortLevels(2) -> 1    mergeSortLevels(8) -> 3    mergeSortLevels(5) -> 3
// Key idea: the deepest path always follows the BIGGER half, which has Math.ceil(n / 2) items.
// Steps:
//   1. Base case: n <= 1 needs no splitting: 0 levels.
//   2. Otherwise: one level for this split, plus the levels needed by the bigger half.
// Think: why is the answer about log2(n)? What does that say about the total work if each level does O(n)?
export function mergeSortLevels(n) {
  throw new Error("TODO");
}

// Q4. Return a NEW array with arr's values in DESCENDING order, using merge sort.
// mergeSortDesc([3, 1, 2]) -> [3, 2, 1]    mergeSortDesc([]) -> []
// Key idea: the split is the same; only the merge decides the order.
// Steps:
//   1. Write a helper mergeDesc(a, b) for two arrays sorted DESCENDING: take the BIGGER front value.
//   2. Copy your Q2 structure, calling mergeSortDesc and mergeDesc.
// Don't just reverse your ascending result: practise changing the merge.
export function mergeSortDesc(arr) {
  throw new Error("TODO");
}

// Q5. arrays is a list of sorted arrays. Return ONE sorted array with all their values.
// mergeKSortedArrays([[1, 5], [2, 3], [0, 9]]) -> [0, 1, 2, 3, 5, 9]    mergeKSortedArrays([]) -> []
// Key idea: merge them one at a time into a running result, with your Q1.
// Steps:
//   1. result = []
//   2. for each array: result = merge(result, array)
//   3. return result
// Think: with k arrays of n items each, the running result keeps growing. Roughly how much work is that?
// (Bonus thought: merging them in PAIRS, like merge sort's levels, is faster: O(nk log k).)
export function mergeKSortedArrays(arrays) {
  throw new Error("TODO");
}

// Q6. sortedArr is sorted ascending and may contain negatives. Return a NEW array of the squares,
// sorted ascending. Aim for O(n): no sorting.
// sortedSquares([-4, -1, 0, 3, 10]) -> [0, 1, 9, 16, 100]    sortedSquares([-3, -2]) -> [4, 9]
// Pattern: two pointers from both ends (a merge in disguise).
// Think: where is the BIGGEST square: in the middle, or at one of the two ends?
// So fill the answer from the back: compare the squares at the two ends, place the bigger one.
export function sortedSquares(sortedArr) {
  throw new Error("TODO");
}

// Q7. a and b are sorted ascending. Return a sorted array of the values that appear in BOTH,
// each value only once. Aim for O(n + m).
// intersectionSorted([1, 2, 2, 3, 5], [2, 2, 5, 6]) -> [2, 5]    intersectionSorted([1, 2], [3, 4]) -> []
// Pattern: two pointers, like merge, but you only keep matches.
// Think: if a[i] < b[j], can a[i] be in b at all (b only gets bigger from j on)?
// Edge case: how do you avoid pushing 2 twice? (look at the last value you pushed)
export function intersectionSorted(a, b) {
  throw new Error("TODO");
}

// Q8. An inversion is a pair of indices i < j with arr[i] > arr[j]. Return how many arr has.
// countInversions([2, 4, 1, 3, 5]) -> 3    countInversions([1, 2, 3]) -> 0    countInversions([3, 2, 1]) -> 3
// Pattern: merge sort, counting while you merge. Aim for O(n log n).
// First: write the O(n²) brute force (two nested loops) in a helper and check it on the examples.
//   Keep it to test your fast version against.
// Then think: while merging sorted left and right, you take right[j] BEFORE left[i]
//   (because right[j] < left[i]). How many left values are still waiting, all bigger than right[j]?
// Base case: 0 or 1 item has 0 inversions. Total = inversions in left + in right + found while merging.
// Hint: a helper that returns BOTH the sorted array and the count, e.g. { sorted, count }.
// Dry run: left [2, 4], right [1, 3]: take 1 (2 and 4 still waiting: +2), take 2, take 3 (4 waiting: +1), take 4 -> 3
export function countInversions(arr) {
  throw new Error("TODO");
}
