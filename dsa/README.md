# DSA in JavaScript

Data structures and algorithms, after [JS for DSA](../js-for-dsa). One topic a day, in five phases, built one phase at a time. JavaScript only for now.

Start at [`index.html`](index.html) (open it from your clone; GitHub shows HTML as source code).

## Each day

| Step | Time | What |
|------|------|------|
| Concept | ≈15 min | open `day-NN/concept.html`: animated algorithms you can step through, plus "predict the output" cards. Teaching together? Press **Teach mode** |
| Questions | ≈25 min | solve `day-NN/questions.js` in order. The **Steps** scaffold fades: full steps for Q1–Q2, only the pattern and a hint by Q8 |
| Check | ≈5 min | `./check.sh dsa N` (N = the day), then commit and push |

## The plan

### Phase 1 · Foundations (12 days) ✅ ready

| Day | Topic |
|-----|-------|
| [1](day-01) | time complexity: counting steps |
| [2](day-02) | space complexity and the cost of built-ins |
| [3](day-03) | thinking recursively |
| [4](day-04) | recursion on arrays and strings |
| [5](day-05) | recursion trees and memoization |
| [6](day-06) | bubble sort and selection sort |
| [7](day-07) | insertion sort, stability, counting sort |
| [8](day-08) | merge sort |
| [9](day-09) | quick sort and quickselect |
| [10](day-10) | binary search templates |
| [11](day-11) | binary search on tricky arrays |
| [12](day-12) | binary search on the answer |

### Phase 2 · Array and string patterns (≈13 days)

Array techniques (prefix sums, Kadane, matrices) · advanced two pointers (3-sum, container with most water, Dutch flag) · variable-size sliding window · hashing patterns (group anagrams, subarray sum = k, longest consecutive) · string problems.

### Phase 3 · Linear data structures (≈10 days)

Just-enough JS classes · linked lists (reverse, middle, cycle, merge) · stacks (valid parentheses, monotonic stack, next greater) · queues and deques (circular queue, sliding window maximum).

### Phase 4 · Trees and graphs (≈18 days)

Binary trees (traversals, height, diameter) · binary search trees · heaps and priority queues · backtracking (subsets, permutations, N-Queens) · graphs (BFS, DFS, islands, cycles, topological sort, Dijkstra).

### Phase 5 · Problem-solving techniques (≈9 days)

Greedy (intervals, jump game) · dynamic programming (1D, then 2D: grid paths, LCS, knapsack) · bonus: bit manipulation, tries, union-find.

## Running the tests

```bash
./check.sh dsa 1     # check DSA Day 1 (use the day you're on)
./check.sh dsa       # check every DSA day
```

An unsolved question is **skipped**, and a wrong answer **fails** and shows the expected value.
