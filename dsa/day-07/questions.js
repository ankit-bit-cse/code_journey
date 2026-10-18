// DSA · Day 7 · insertion sort, stability and sorting by keys
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `./check.sh dsa 7` to check. No `.sort()` today, EXCEPT in Q4 and Q5 (the comparator questions).

// Q1. sorted is sorted ascending. Return a NEW sorted array with x added in the right place.
// Do not change `sorted`. No .sort(), no .splice().
// insertInSorted([1, 3, 5], 4) -> [1, 3, 4, 5]    insertInSorted([], 7) -> [7]    insertInSorted([2, 4], 1) -> [1, 2, 4]
// Steps:
//   1. Copy sorted into a new array `out` (slice), then push x on the end.
//   2. let j = the index of that last slot (out.length - 1).
//   3. while j > 0 and the value on the LEFT of j is bigger than x:
//        move that bigger value one slot to the right (out[j] = out[j - 1]), then j--.
//   4. Now j is the hole where x belongs: out[j] = x. Return out.
//   Check: what happens when x is the biggest? (the loop never runs, x stays at the end)
export function insertInSorted(sorted, x) {
  throw new Error("TODO");
}

// Q2. Sort arr ascending IN PLACE with insertion sort, and return arr.
// insertionSort([5, 2, 4, 1]) -> [1, 2, 4, 5]    insertionSort([]) -> []    insertionSort([3, -1, 3]) -> [-1, 3, 3]
// Pattern: insertion sort. The left part arr[0..i-1] is always sorted.
// Steps:
//   1. for i from 1 to the end:
//   2.   key = arr[i]   (lift the card out of the row; its slot is now a "hole")
//   3.   j = i - 1
//   4.   while j >= 0 and arr[j] > key: shift arr[j] one slot right (into j + 1), then j--.
//   5.   drop key into the hole: arr[j + 1] = key
//   6. return arr
//   This is Q1's loop, done for every i.
// Invariant: before step 2, arr[0..i-1] is sorted.
export function insertionSort(arr) {
  throw new Error("TODO");
}

// Q3. Return how many SHIFTS insertion sort makes on arr (each `arr[j + 1] = arr[j]` is one shift).
// Do not change the input (work on a copy).
// insertionShifts([1, 2, 3]) -> 0    insertionShifts([3, 2, 1]) -> 3    insertionShifts([2, 1, 3, 5, 4]) -> 2
// Key idea: copy your Q2 code and count inside the while loop.
// Steps:
//   1. a = arr.slice(), shifts = 0
//   2. run insertion sort on a; every time the while loop shifts a value, shifts++
//   3. return shifts
// Think: why is it 0 for sorted input and n(n-1)/2 for reverse sorted input?
// (Each shift fixes exactly one pair that was in the wrong order.)
export function insertionShifts(arr) {
  throw new Error("TODO");
}

// Q4. people is a list of { name, age }. Return a NEW array sorted by age (youngest first);
// people with the same age are sorted by name A to Z. `.sort` IS allowed here.
// sortByAgeThenName([{ name: "Ravi", age: 30 }, { name: "Asha", age: 25 }, { name: "Dev", age: 30 }])
//   -> [{ name: "Asha", age: 25 }, { name: "Dev", age: 30 }, { name: "Ravi", age: 30 }]
// Key idea: one comparator, two keys. Compare the first key; only if it's a tie, compare the second.
// Steps:
//   1. copy the array first (sort changes the array it's called on)
//   2. in the comparator: if a.age !== b.age, return the age difference
//   3. otherwise compare names. Strings can't be subtracted: use a.name.localeCompare(b.name),
//      which is negative, 0 or positive just like a - b.
export function sortByAgeThenName(people) {
  throw new Error("TODO");
}

// Q5. Return a NEW array of the words sorted by length (shortest first), and words of the
// same length in alphabetical order. `.sort` IS allowed here. Words are lowercase.
// sortStringsByLengthThenAlpha(["pear", "fig", "apple", "kiwi"]) -> ["fig", "kiwi", "pear", "apple"]
// Key idea: the same two-key comparator as Q4, with length as the first key.
// Steps:
//   1. copy, then sort with a comparator
//   2. different lengths? return the length difference. Same length? localeCompare.
export function sortStringsByLengthThenAlpha(words) {
  throw new Error("TODO");
}

// Q6. items is a list of { name, score }. Return a NEW array sorted by score (lowest first).
// It must be STABLE: items with the same score keep the order they had in the input.
// No .sort(): write it with insertion sort.
// sortStableByKey([{ name: "a", score: 2 }, { name: "b", score: 1 }, { name: "c", score: 2 }])
//   -> [{ name: "b", score: 1 }, { name: "a", score: 2 }, { name: "c", score: 2 }]
// Pattern: insertion sort, comparing a KEY instead of the whole value.
// Think: your Q2 while loop shifts when arr[j] > key. What would happen to "a" and "c"
// if it shifted when arr[j].score >= key.score instead? Which one keeps the sort stable?
// Invariant: the left part is sorted by score, and equal scores are still in input order.
export function sortStableByKey(items) {
  throw new Error("TODO");
}

// Q7. arr holds only 0s, 1s and 2s. Sort it IN PLACE in O(n) and return arr. No .sort().
// sortZeroOneTwo([2, 0, 1, 2, 0]) -> [0, 0, 1, 2, 2]    sortZeroOneTwo([]) -> []
// Pattern: counting. Comparison sorts can't beat O(n log n), but you know there are only 3 values.
// Think: if you knew how many 0s, 1s and 2s there are, could you just write the answer?
// Two passes: one to count, one to overwrite arr.
export function sortZeroOneTwo(arr) {
  throw new Error("TODO");
}

// Q8. Counting sort. Every value in arr is a whole number from 0 to maxValue.
// Return { counts, sorted }:
//   counts[v] = how many times v appears (an array of length maxValue + 1)
//   sorted    = a NEW sorted array built from counts (do not change arr). No .sort().
// countingSort([3, 1, 3, 0], 3) -> { counts: [1, 1, 0, 2], sorted: [0, 1, 3, 3] }
// Pattern: counting sort, O(n + k) time and O(k) extra space, where k = maxValue + 1.
// Think: how do you make an array of k zeros? (`new Array(k).fill(0)`)
// Think: once counts is full, do you still need arr to build sorted?
// Dry run: [2, 0, 2], max 2 -> counts [1, 0, 2] -> push 0 once, 1 zero times, 2 twice -> [0, 2, 2]
export function countingSort(arr, maxValue) {
  throw new Error("TODO");
}
