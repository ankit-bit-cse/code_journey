// DSA · Day 12 · binary search on the answer
// Replace each `throw new Error("TODO")` with your code. Solve them in order.
// The "Steps" comments are a scaffold: follow them if you're stuck.
// Run `./check.sh dsa 12` to check. Today you binary search over the ANSWER (a range of numbers), not over an array.
// No Math.sqrt, Math.cbrt, Math.pow or `**`. Every question has the same 3 parts:
//   the range [lo, hi] the answer is in, a yes/no helper canDo(x), and a binary search that uses it.

// Q1. Return the square root of n rounded DOWN: the biggest whole number r with r * r <= n. n is a whole number >= 0.
// sqrtFloor(16) -> 4    sqrtFloor(20) -> 4    sqrtFloor(0) -> 0    sqrtFloor(1) -> 1
// Pattern: binary search on the answer, looking for the LARGEST r that works. Aim for O(log n).
// Steps:
//   1. The yes/no question: "is r * r <= n?" For r = 0, 1, 2, ... the answers go yes, yes, yes, no, no.
//      You want the last "yes".
//   2. The answer is between 0 and n, so lo = 0, hi = n. Keep ans = 0 (the best r found so far).
//   3. While lo <= hi:
//        a. mid = Math.floor((lo + hi) / 2)
//        b. if mid * mid <= n, mid works: save it (ans = mid), then look for a BIGGER one: lo = mid + 1
//        c. otherwise mid is too big: hi = mid - 1
//   4. Return ans.
// Invariant: ans always works, and any better answer is inside [lo, hi].
export function sqrtFloor(n) {
  throw new Error("TODO");
}

// Q2. Return the whole number r with r to the power k exactly equal to n, or -1 if there is none.
// n >= 0 and k >= 1 are whole numbers.
// nthRootInt(27, 3) -> 3    nthRootInt(16, 4) -> 2    nthRootInt(15, 2) -> -1    nthRootInt(1, 5) -> 1
// Pattern: classic binary search (Day 10, Q1) over r from 0 to n, with a loop to work out mid to the power k.
// Steps:
//   1. Write a helper powerUpTo(b, k, n) that multiplies b by itself k times with a loop, but stops early
//      and returns n + 1 as soon as the product goes past n (so huge numbers never appear).
//   2. lo = 0, hi = n. While lo <= hi:
//        a. p = powerUpTo(mid, k, n)
//        b. p === n: found, return mid
//        c. p < n: mid is too small: lo = mid + 1
//        d. p > n: mid is too big: hi = mid - 1
//   3. The loop ended without an exact match: return -1.
// Why stop early in step 1? Try 1000 to the power 10 in your head.
export function nthRootInt(n, k) {
  throw new Error("TODO");
}

// Q3. Koko eats bananas. piles[i] is the number of bananas in pile i. Each hour she picks ONE pile and eats
// up to `speed` bananas from it (if the pile has fewer, she finishes it and waits for the next hour).
// Return the SMALLEST whole speed that lets her eat everything within h hours. h >= piles.length.
// minEatingSpeed([3, 6, 7, 11], 8) -> 4    minEatingSpeed([30, 11, 23, 4, 20], 5) -> 30    minEatingSpeed([30, 11, 23, 4, 20], 6) -> 23
// Key idea: if speed s is enough, any faster speed is enough too. So the answers go no, no, yes, yes:
// find the first "yes" (like firstBadVersion yesterday).
// Steps:
//   1. Helper: canFinish(speed) -> true if the hours needed are <= h. One pile of p bananas takes Math.ceil(p / speed) hours.
//      (Check: speed 4 on [3, 6, 7, 11] -> 1 + 2 + 2 + 3 = 8 hours.)
//   2. Range: the slowest possible speed is 1. What speed is ALWAYS fast enough? (Hint: the biggest pile.)
//   3. Binary search for the smallest speed where canFinish is true. Keep `ans` and go left when it works.
// Complexity: O(n · log(max pile)).
export function minEatingSpeed(piles, h) {
  throw new Error("TODO");
}

// Q4. A conveyor belt has packages with these weights, in this order. Each day the ship is loaded with packages
// in order, without going over its capacity. Return the SMALLEST capacity that ships everything within `days` days.
// shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5) -> 15    shipWithinDays([3, 2, 2, 4, 1, 4], 3) -> 6    shipWithinDays([1, 2, 3, 1, 1], 4) -> 3
// Key idea: same shape as Q3. Only the helper and the range change.
// Steps:
//   1. Helper: canShip(cap) -> walk through the weights, adding them to today's load. When the next one would go
//      over cap, start a new day. Count the days and compare with `days`.
//      (Check: cap 15 on [1..10] -> [1..5] [6, 7] [8] [9] [10] = 5 days.)
//   2. Range: the ship must carry the heaviest single package, so lo = ? And with hi = ? it's all done in one day.
//   3. Binary search for the smallest cap where canShip is true.
export function shipWithinDays(weights, days) {
  throw new Error("TODO");
}

// Q5. Pick a whole-number divisor d. Divide every number by d, rounding UP, and add the results.
// Return the SMALLEST d that makes this sum <= threshold. threshold >= nums.length.
// smallestDivisor([1, 2, 5, 9], 6) -> 5    smallestDivisor([44, 22, 33, 11, 1], 5) -> 44    smallestDivisor([2, 3], 100) -> 1
// Key idea: a bigger d gives a smaller (or equal) sum, so "is the sum <= threshold?" goes no, no, yes, yes.
// Steps:
//   1. Helper: canDivide(d) -> the sum of Math.ceil(x / d), compared with threshold.
//   2. Range: d = 1 is the smallest. Which d is surely big enough? (When is every Math.ceil(x / d) equal to 1?)
//   3. Same search as Q3. (Notice anything familiar about the helper?)
export function smallestDivisor(nums, threshold) {
  throw new Error("TODO");
}

// Q6. Flower i blooms on day bloomDay[i]. A bouquet needs k flowers that are NEXT TO each other (in a row in the
// array), and each flower can be in only one bouquet. Return the smallest day on which you can make m bouquets,
// or -1 if it is impossible.
// minDaysForBouquets([1, 10, 3, 10, 2], 3, 1) -> 3    minDaysForBouquets([1, 10, 3, 10, 2], 3, 2) -> -1
// minDaysForBouquets([7, 7, 7, 7, 12, 7, 7], 2, 3) -> 12
// Pattern: binary search on the answer (smallest day that works).
// Guiding questions: if you can make m bouquets on day D, can you on day D + 1? Which days are worth trying
// (what is the earliest and latest day anything blooms)? When is it impossible no matter how long you wait?
// Helper canMake(day): walk left to right counting a run of bloomed flowers (bloomDay[i] <= day). When the run reaches
// k, that's a bouquet: count it and start a new run. A flower that hasn't bloomed breaks the run.
// Invariant: ans is the best day found so far (or -1), and any better day is inside [lo, hi].
export function minDaysForBouquets(bloomDay, m, k) {
  throw new Error("TODO");
}

// Q7. Split nums (whole numbers >= 0) into k non-empty parts, each part a run of neighbours, in order. Make the
// BIGGEST part sum as small as possible, and return that sum. 1 <= k <= nums.length.
// splitArrayLargestSum([7, 2, 5, 10, 8], 2) -> 18    splitArrayLargestSum([1, 2, 3, 4, 5], 2) -> 9    splitArrayLargestSum([1, 4, 4], 3) -> 4
// Pattern: binary search on the answer. You've already written this exact algorithm today under a different story.
// Guiding questions: "can every part have a sum <= limit, using at most k parts?" Which question was that before?
// Why is "at most k parts" good enough when the question asks for exactly k?
// Dry run: [7, 2, 5, 10, 8], k = 2, limit 18 -> [7, 2, 5] (14) + [10, 8] (18) = 2 parts: yes.
//          limit 17 -> [7, 2, 5] + [10] + [8] = 3 parts: no. So the answer is 18.
export function splitArrayLargestSum(nums, k) {
  throw new Error("TODO");
}

// Q8. stalls are positions on a line (any order, all different). Put `cows` cows in different stalls so that the
// SMALLEST distance between any two cows is as BIG as possible. Return that distance. 2 <= cows <= stalls.length.
// aggressiveCows([1, 2, 4, 8, 9], 3) -> 3    aggressiveCows([10, 1, 2, 7, 5], 3) -> 4    aggressiveCows([5, 1], 2) -> 4
// You may sort the stalls today: [...stalls].sort((a, b) => a - b) (don't change the input).
// Pattern: binary search on the answer, looking for the LARGEST value that works (like Q1, not like Q3).
// Guiding questions: if the cows can be at least d apart, can they be at least d - 1 apart? So the answers go
// yes, yes, yes, no, no. To check a distance d, is it ever worse to put the first cow in the very first stall?
// Helper canPlace(d): greedy, left to right. Put a cow in the first stall, then in every stall at least d past the last cow.
// Invariant: ans always works, and any better answer is inside [lo, hi].
// Dry run: [1, 2, 4, 8, 9], d = 3 -> cows at 1, 4, 8: 3 cows, yes.   d = 4 -> cows at 1, 8: only 2, no.
export function aggressiveCows(stalls, cows) {
  throw new Error("TODO");
}
