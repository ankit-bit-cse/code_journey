# Day 2 · Java · for loops and arrays

## Concept

### for loops: same as JavaScript, with a type

```java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
```

The only change from JS: `int i` instead of `let i`. The counter and total patterns from today's JavaScript session work the same:

```java
int count = 0;
int total = 0;
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        count++;
        total += i;
    }
}
// count = 5, total = 30
```

### Arrays have a fixed type and size

| JavaScript | Java |
|------------|------|
| `const nums = [4, -2, 7];` | `int[] nums = {4, -2, 7};` |
| `nums.length` | `nums.length` (same, no brackets) |
| `nums[0]` | `nums[0]` |
| `const empty = [];` then `push` | `int[] arr = new int[10];` (10 zeros; size fixed) |

A Java array **can't grow**: there's no `push`. You decide the size when you create it, then fill each slot by index:

```java
int[] table = new int[10];
for (int i = 0; i < 10; i++) {
    table[i] = 3 * (i + 1);
}
// {3, 6, 9, ..., 30}
```

### The for-each loop

When you only need each value, not its index:

```java
for (int n : nums) {        // read as: "for each int n in nums"
    System.out.println(n);
}
```

It's like `for (const n of nums)` in JavaScript.

### int vs long

An `int` can only hold up to about 2.1 billion. `factorial(13)` is already bigger than that, so use `long` (up to about 9 × 10¹⁸):

```java
long big = 1;
```

## Questions

Solve them in order in `Day02.java`, then run `npm run test:java`.

| # | Method | Returns |
|---|--------|---------|
| Q1 | `sumTo(int n)` | `int` |
| Q2 | `countEvensUpTo(int n)` | `int` |
| Q3 | `countPositives(int[] arr)` | `int` |
| Q4 | `sumOfEvens(int[] arr)` | `int` |
| Q5 | `table(int n)` | `int[]` of 10 numbers |
| Q6 | `factorial(int n)` | `long` |
| Q7 | `countDigits(int n)` | `int` |
