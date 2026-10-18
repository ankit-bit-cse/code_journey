// DSA · Day 6 · bubble sort and selection sort
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `./check.sh dsa 6` to check. No .sort() today: you ARE the sort. Never change the input array:
// copy it first (const a = [...arr];), then swap inside the copy as much as you like.
// Close concept.html before Q2 and Q6: the lesson animates these sorts, so write them from memory.

// Q1. Do ONE pass of bubble sort and return the new array: walk left to right, and whenever
// a[j] > a[j + 1], swap them. The biggest value ends up at the end.
// bubblePass([5, 1, 4, 2, 8]) -> [1, 4, 2, 5, 8]    bubblePass([3, 2, 1]) -> [2, 1, 3]    bubblePass([]) -> []
// Steps:
//   1. const a = [...arr];
//   2. for j from 0 while j < a.length - 1 (j + 1 must still be inside the array):
//   3.   if a[j] > a[j + 1], swap them: [a[j], a[j + 1]] = [a[j + 1], a[j]];
//   4. return a
// Dry run [3, 2, 1]: j=0: 3 > 2 swap -> [2, 3, 1]; j=1: 3 > 1 swap -> [2, 1, 3]
export function bubblePass(arr) {
  throw new Error("TODO");
}

// Q2. Sort from small to big with bubble sort and return the sorted copy.
// bubbleSort([5, 1, 4, 2, 8]) -> [1, 2, 4, 5, 8]    bubbleSort([2, -1, 2, 0]) -> [-1, 0, 2, 2]
// Steps:
//   1. Copy the array.
//   2. Do n - 1 passes (n = a.length). Pass i (counting from 0) leaves the i + 1 biggest values
//      in place at the end, so its inner loop can stop at j < n - 1 - i.
//   3. Inside: the same compare-and-swap as Q1.
//   4. Return the copy. Aim: O(n²) comparisons. Why is n - 1 passes always enough?
export function bubbleSort(arr) {
  throw new Error("TODO");
}

// Q3. Return how many swaps bubble sort makes to sort arr (only swap when a[j] > a[j + 1], strictly).
// bubbleSwaps([3, 2, 1]) -> 3    bubbleSwaps([1, 2, 3]) -> 0    bubbleSwaps([2, 1, 2, 1]) -> 3
// Key idea: run your Q2 sort on a copy and count each swap.
// Steps:
//   1. let swaps = 0, then do the Q2 loops, adding 1 every time you swap.
//   2. Return swaps, not the array.
// Think: why do equal values never get swapped? (That is what keeps bubble sort STABLE.)
export function bubbleSwaps(arr) {
  throw new Error("TODO");
}

// Q4. Bubble sort with an early exit: do at most n - 1 passes, but stop right after a pass that
// made NO swap (the array is already sorted). Return how many passes you did (count the last one too).
// bubbleSortEarlyExit([1, 2, 3]) -> 1    bubbleSortEarlyExit([2, 1, 3]) -> 2    bubbleSortEarlyExit([5, 1, 4, 2, 8]) -> 3
// bubbleSortEarlyExit([]) -> 0    bubbleSortEarlyExit([7]) -> 0    bubbleSortEarlyExit([3, 2, 1]) -> 2 (the limit n - 1)
// Key idea: a flag. Each pass starts with swapped = false; any swap sets it to true.
// Steps:
//   1. let passes = 0. Loop i from 0 while i < n - 1: passes++, then one pass (inner loop j < n - 1 - i).
//   2. After the pass: if nothing was swapped, break.
//   3. Return passes. Best case (already sorted): 1 pass, O(n). Worst case: still O(n²).
export function bubbleSortEarlyExit(arr) {
  throw new Error("TODO");
}

// Q5. Return the index of the smallest value in arr[start..] (from start to the end).
// If the smallest value appears more than once, return the FIRST (leftmost) of them.
// minIndexFrom([4, 2, 7, 2], 0) -> 1    minIndexFrom([4, 2, 7, 2], 2) -> 3    minIndexFrom([9], 0) -> 0
// Key idea: remember the index of the best so far, not the value.
// Steps:
//   1. let min = start. 2. Walk j from start + 1 to the end; if arr[j] < arr[min], min = j.
//   3. Return min. (Why < and not <=? Check the "first of them" rule.)
export function minIndexFrom(arr, start) {
  throw new Error("TODO");
}

// Q6. Sort from small to big with selection sort and return the sorted copy.
// selectionSort([5, 3, 6, 1, 4]) -> [1, 3, 4, 5, 6]    selectionSort([]) -> []    selectionSort([2, 2, 1]) -> [1, 2, 2]
// Pattern: selection sort, built on minIndexFrom (Q5).
// Think: after step i, which part of the array is finished? Where must the smallest unsorted value go?
// Invariant: a[0..i-1] holds the i smallest values, in order. Exactly one swap per step (at most n - 1 swaps).
export function selectionSort(arr) {
  throw new Error("TODO");
}

// Q7. Sort from BIG to small with selection sort and return the sorted copy.
// selectionSortDesc([5, 3, 6, 1, 4]) -> [6, 5, 4, 3, 1]    selectionSortDesc([1, 1, 0]) -> [1, 1, 0]
// Pattern: selection sort again. Which single thing changes when the biggest must come first?
// (Write a small maxIndexFrom helper, or change one comparison.)
// Invariant: a[0..i-1] holds the i biggest values, from big to small.
export function selectionSortDesc(arr) {
  throw new Error("TODO");
}

// Q8. Return the k smallest values of arr, from small to big, by running only the FIRST k steps
// of selection sort (not the whole sort). If k > arr.length, return the whole array sorted.
// kSmallestBySelection([7, 2, 9, 4, 1], 2) -> [1, 2]    kSmallestBySelection([3, 1], 0) -> []
// kSmallestBySelection([5, 5, 1], 5) -> [1, 5, 5]
// Pattern: a partial selection sort. Cost: about k · n comparisons, better than a full sort when k is small.
// Think: after k steps, which part of the copy is the answer? How do you return just that part?
// Edge cases: k = 0, k bigger than the array.
export function kSmallestBySelection(arr, k) {
  throw new Error("TODO");
}
