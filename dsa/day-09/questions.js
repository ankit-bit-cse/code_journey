// DSA · Day 9 · quick sort and quickselect
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `./check.sh dsa 9` to check. No `.sort()` today, except in Q8.
//
// Every question uses the SAME partition, the Lomuto scheme, so the results are predictable:
//   pivot = the LAST value of the range. i = the start of the range.
//   for j from the start to the one before the pivot:
//     if arr[j] < pivot (strictly less): swap arr[i] and arr[j], then i++
//   finally swap arr[i] with the pivot. The pivot is now at index i, in its final sorted place:
//   everything on its left is < pivot, everything on its right is >= pivot.

// Q1. Partition a COPY of arr with Lomuto (see above) and return { pivotIndex, result }.
// arr has at least 1 value. Do not change arr.
// partition([4, 8, 1, 6, 3, 5]) -> { pivotIndex: 3, result: [4, 1, 3, 5, 8, 6] }
// partition([3, 1, 2]) -> { pivotIndex: 1, result: [1, 2, 3] }    partition([5]) -> { pivotIndex: 0, result: [5] }
// Steps:
//   1. a = arr.slice(), last = a.length - 1, pivot = a[last], i = 0
//   2. for j from 0 to last - 1: if a[j] < pivot, swap a[i] and a[j], then i++
//      (a[0..i-1] is the "small" zone: everything in it is < pivot)
//   3. swap a[i] and a[last]: the pivot jumps to the end of the small zone
//   4. return { pivotIndex: i, result: a }
// Dry run: [4, 8, 1, 6, 3, 5], pivot 5 -> 4 small (i=1), 8 no, 1 small: swap -> [4,1,8,6,3,5] (i=2),
//   6 no, 3 small: swap -> [4,1,3,6,8,5] (i=3), last swap a[3], a[5] -> [4,1,3,5,8,6], pivotIndex 3
export function partition(arr) {
  throw new Error("TODO");
}

// Q2. Sort arr ascending IN PLACE with quick sort and return arr.
// quickSort([4, 8, 1, 6, 3, 5]) -> [1, 3, 4, 5, 6, 8]    quickSort([]) -> []    quickSort([2, 2, 1]) -> [1, 2, 2]
// Pattern: divide and conquer: partition FIRST, then recurse on both sides (no merge needed).
// Steps:
//   1. Write a helper partitionRange(arr, lo, hi): your Q1 loop, but on arr itself and only on
//      indices lo..hi (pivot = arr[hi], i starts at lo, j goes from lo to hi - 1). Return i.
//   2. Write a helper sortRange(arr, lo, hi):
//        Base case: if lo >= hi (0 or 1 values), return.
//        p = partitionRange(arr, lo, hi)
//        sortRange on lo..p-1, then sortRange on p+1..hi   (the pivot at p is already in place)
//   3. quickSort calls sortRange(arr, 0, arr.length - 1) and returns arr.
export function quickSort(arr) {
  throw new Error("TODO");
}

// Q3. Return how many comparisons `arr[j] < pivot` your quick sort makes while sorting a COPY of arr.
// quickSortCompareCount([1, 2, 3]) -> 3    quickSortCompareCount([4, 8, 1, 6, 3, 5]) -> 8
// quickSortCompareCount([5, 1, 4, 2, 3]) -> 6
// Key idea: copy your Q2 helpers and count inside the partition loop.
// Steps:
//   1. a counter the helpers can all reach: e.g. `let comparisons = 0;` inside quickSortCompareCount,
//      with the helpers written inside it too (they can see its variables).
//   2. one comparisons++ per run of the j loop
//   3. sort a copy, return comparisons
// Think: on sorted input of n values the pivot is always the BIGGEST, so one side is empty and
// the other has n - 1 values. Why does that give n(n-1)/2 comparisons, the O(n²) worst case?
export function quickSortCompareCount(arr) {
  throw new Error("TODO");
}

// Q4. Return a NEW array: first every value < x, then every value >= x, each group in its
// original order (stable). Do not change arr.
// partitionAroundValue([5, 1, 7, 2, 9, 3], 5) -> [1, 2, 3, 5, 7, 9]
// partitionAroundValue([4, 9, 1, 8], 5) -> [4, 1, 9, 8]
// Key idea: Lomuto's swaps are NOT stable (they jumble the order). With extra space it's easy to be stable.
// Steps:
//   1. two arrays: small and big
//   2. one pass: each value goes into small (if < x) or big
//   3. return small followed by big
// Think: what does this cost in extra space, compared with Lomuto?
export function partitionAroundValue(arr, x) {
  throw new Error("TODO");
}

// Q5. Return the k-th smallest value of arr (k = 1 means the smallest). 1 <= k <= arr.length.
// Duplicates count separately. Do not change arr. Aim for average O(n): quickselect.
// kthSmallest([7, 10, 4, 3, 20, 15], 3) -> 7    kthSmallest([5], 1) -> 5    kthSmallest([2, 2, 1], 2) -> 2
// Pattern: quickselect = quick sort that only follows ONE side.
// Steps:
//   1. a = a copy, lo = 0, hi = a.length - 1, target = k - 1 (the index the answer has in sorted order)
//   2. loop: p = partitionRange(a, lo, hi) (your Q2 helper)
//        p === target? a[p] is the answer.  Otherwise: which side must the target be on?
// Invariant: the target index is always inside [lo, hi].
export function kthSmallest(arr, k) {
  throw new Error("TODO");
}

// Q6. arr holds only 0s, 1s and 2s. Sort it IN PLACE in ONE pass, with O(1) extra space. Return arr.
// dutchFlag([2, 0, 2, 1, 1, 0]) -> [0, 0, 1, 1, 2, 2]    dutchFlag([]) -> []
// Pattern: three-way partition (Dijkstra's Dutch national flag): three pointers low, mid, high.
// Invariant: arr[0..low-1] are 0s, arr[low..mid-1] are 1s, arr[mid..high] are not looked at yet,
//   arr[high+1..] are 2s. Loop while mid <= high.
// Think: when arr[mid] is 2 and you swap it with arr[high], why must mid NOT move on?
export function dutchFlag(arr) {
  throw new Error("TODO");
}

// Q7. Return the k largest values of arr, biggest first. 0 <= k <= arr.length. Do not change arr.
// topKLargest([3, 1, 5, 12, 2, 11], 3) -> [12, 11, 5]    topKLargest([4, 4, 1], 2) -> [4, 4]
// Pattern: reuse your own sorting: no .sort(), no Math.max loop k times.
// Think: after sorting a copy ascending with your quickSort, where do the k largest sit?
// (Faster idea for later: quickselect the (n - k)-th position, then sort only the k values right of it.)
export function topKLargest(arr, k) {
  throw new Error("TODO");
}

// Q8. Return a NEW array with the same values, sorted by how often they appear (most frequent first).
// Values with the same frequency go smallest first. Map and `.sort` ARE allowed here.
// sortedByFrequency([1, 1, 2, 2, 2, 3]) -> [2, 2, 2, 1, 1, 3]    sortedByFrequency([4, 6, 4, 6]) -> [4, 4, 6, 6]
// Pattern: count with a Map, then sort with a two-key comparator (Day 7).
// Think: inside the comparator, how do you get a value's count? Which key comes first?
export function sortedByFrequency(arr) {
  throw new Error("TODO");
}
