# DSA · Day 3 · thinking recursively

**Start with the animated lesson:** open [`concept.html`](concept.html) in your browser. This README is the same lesson in short.

## Concept

### Three questions, every time

1. **Base case:** the smallest input, answered right away.
2. **Smaller problem:** a smaller input of the same kind inside yours.
3. **Trust and combine:** assume the call on the smaller input is right, and build your answer from it.

```js
function len(s) {
  if (s === "") return 0;        // base case
  return 1 + len(s.slice(1));    // smaller problem + combine
}
```

**Trust, don't trace.** Don't follow the call all the way down in your head (the "leap of faith"). Write the formula first (`n! = n × (n − 1)!`, `gcd(a, b) = gcd(b, a % b)`), then turn it into code. The base case must be **reachable**: `f(n − 2)` with base case `n === 0` never stops for odd n.

### The call stack

Each call waits on the stack until the call above it returns. The stack grows on the way down to the base case and shrinks on the way back up. Code **before** the recursive call runs on the way down, code **after** it on the way back up.

### Recursion vs loops

| | Loop | Recursion |
|---|------|-----------|
| extra space | O(1) | O(depth): one stack frame per waiting call |
| depth 10⁶ | fine | `RangeError: Maximum call stack size exceeded` |
| shines at | walking a list once | problems that split into smaller copies |

The stack holds about 10,000 frames. Overflow means a missing/unreachable base case, or a correct recursion that is simply too deep.

### Fast power

`b^e = half × half` when e is even and `half × half × b` when e is odd, with `half = b^⌊e/2⌋`. Compute `half` **once**. Each call halves e, so there are about log₂ e calls instead of e.

### Extra parameters with defaults

```js
function rev(a, lo = 0, hi = a.length - 1) {   // the caller just writes rev(a)
  if (lo >= hi) return;
  [a[lo], a[hi]] = [a[hi], a[lo]];
  rev(a, lo + 1, hi - 1);
}
```

Moving an index instead of slicing avoids copying the array or string on every call.

## Complexity

| Algorithm | Time | Space (stack) |
|-----------|------|---------------|
| sum of digits, binary of n (drop a digit each call) | O(log n) | O(log n) |
| count down list `[n, ...rest]` | O(n²) (each spread copies) | O(n) |
| gcd (Euclid) | O(log(min(a, b))) | O(log(min(a, b))) |
| reverse a string with `slice` | O(n²) (each slice copies) | O(n) |
| count in an array / palindrome with an index | O(n) | O(n) |
| power, slow `b × pow(b, e − 1)` | O(e) | O(e) |
| power, fast (halve e) | O(log e) | O(log e) |

## DSA connection

Recursion is the engine of trees, depth-first search, backtracking and divide and conquer (merge sort and quick sort, Days 8–9). "Implement pow(x, n)" is an interview classic, and "halve the problem and reuse the half" is the same O(log n) idea as binary search.

## Questions

Solve them in order in [`questions.js`](questions.js). **Not allowed today:** `for` and `while` loops, `.reverse()`, `toString(2)`, `**` and `Math.pow`. Say the base case, the smaller problem and the combine step out loud before you type.

| # | Function | Returns |
|---|----------|---------|
| Q1 | `sumDigitsRec(n)` | the sum of the digits |
| Q2 | `countDownList(n)` | `[n, n − 1, ..., 1]` |
| Q3 | `gcdRec(a, b)` | the greatest common divisor (Euclid) |
| Q4 | `stringReverseRec(s)` | s backwards |
| Q5 | `binaryOf(n)` | n in binary: `5` → `"101"` |
| Q6 | `countOccurrencesRec(arr, x)` | how many times x appears, with an index parameter |
| Q7 | `isPalindromeRec(s)` | true if s reads the same both ways, with lo / hi parameters |
| Q8 | `powerFast(b, e)` | b to the power e in O(log e) |

Stuck for 10 minutes? Re-watch the animation for that idea in concept.html, then read the Steps again.

Run `./check.sh dsa 3`
