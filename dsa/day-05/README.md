# DSA · Day 5 · recursion trees and memoization

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

### Two calls per step make a tree

```js
function fib(n) {
  if (n < 2) return n;               // fib(0) = 0, fib(1) = 1
  return fib(n - 1) + fib(n - 2);    // TWO recursive calls
}
```

One call per step (Days 3 and 4) gives a chain. Two calls per step give a **tree**: `fib(4)` calls `fib(3)` and `fib(2)`, each of those calls two more, and so on. `fib(4)` makes 9 calls; `fib(30)` makes 2.7 million; `fib(50)` would take minutes. The number of calls grows like 2ⁿ (more exactly about 1.6ⁿ): **exponential time**.

The space is only **O(n)**: the stack holds one path from the root to a leaf at a time, never the whole tree.

### The waste: the same question, again and again

Inside `fib(5)`, `fib(3)` is computed 2 times and `fib(2)` 3 times, each time from scratch. There are only n + 1 different questions (`fib(0)` to `fib(n)`), but the tree asks them exponentially often.

### Memoization: remember every answer

Keep a memo (an object or a `Map`). Before computing, look in it. After computing, store in it.

```js
function fib(n, memo = {}) {
  if (n in memo) return memo[n];     // asked before? answer at once
  if (n < 2) return n;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
```

Now each `fib(k)` is computed once, so there are about 2n calls: **O(n) time**, O(n) space for the memo and the stack. `fib(50)` is instant.

- Pass the **same** memo down to every call. The default `memo = {}` makes a fresh one only for the first call.
- Check with `n in memo` (or `memo.has(n)` for a Map), not `if (memo[n])`: a stored answer of `0` is falsy.
- Two parameters? Make one key: `` `${r},${c}` ``.

### Think about the last move

"How many ways…" questions often split on the **last** (or first) move: you reach stair n from stair n - 1 or from stair n - 2, so `ways(n) = ways(n - 1) + ways(n - 2)`. That split, plus a memo, is the start of dynamic programming.

### Tower of Hanoi: trust the recursion

To move n disks from A to C: move the top n - 1 disks out of the way (A to B), move the biggest disk (A to C), then move the n - 1 disks back on top of it (B to C). Two recursive calls of size n - 1 plus one move: **2ⁿ - 1 moves**. No memo can help here: every move must really be made.

## Complexity

| Algorithm | Time | Space |
|-----------|------|-------|
| `fib(n)`, plain recursion | O(2ⁿ) (about 1.6ⁿ calls) | O(n) stack |
| `fib(n)` with a memo | O(n) | O(n) memo + stack |
| grid paths r × c, plain | about O(2^(r+c)) | O(r + c) stack |
| grid paths r × c, memo | O(r · c) | O(r · c) memo |
| Tower of Hanoi, n disks | O(2ⁿ) moves | O(n) stack (+ the list of moves) |
| count subsets with a sum (take/skip) | O(2ⁿ) | O(n) stack |

## Questions

Solve them in order in [`questions.js`](questions.js). The memo questions must look in their memo first: some tests hand you a memo that is already filled in.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `fibRec(n)` | the n-th Fibonacci number, plain recursion |
| Q2 | `fibCalls(n)` | how many calls `fibRec(n)` makes |
| Q3 | `fibMemo(n, memo = {})` | the n-th Fibonacci number, with a memo |
| Q4 | `climbStairs(n, memo = {})` | the ways to climb n stairs, 1 or 2 at a time |
| Q5 | `tribonacci(n, memo = {})` | the n-th Tribonacci number, with a memo |
| Q6 | `gridPathsMemo(r, c, memo = {})` | right/down paths across an r × c grid, with a memo |
| Q7 | `hanoiMoves(n, from, to, via)` | the list of moves, like `"A->C"` |
| Q8 | `countSubsetsWithSum(arr, target)` | how many subsets add up to target |

Stuck for 10 minutes? Re-watch the animation for that idea in concept.html, then read the Steps again.

Run `./check.sh dsa 5`
