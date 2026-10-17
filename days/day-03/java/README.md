# Day 3 · Java · methods and return types

## Concept

In today's JavaScript session, a function could return anything. In Java, **the return type is part of the method** and the compiler checks it.

```java
static double rectangleArea(double w, double h) {
    return w * h;
}
```

Read it left to right:

| Part | Meaning |
|------|---------|
| `static` | belongs to the class; call it without creating an object (more on this later) |
| `double` | the **return type**: this method gives back a decimal number |
| `rectangleArea` | the name |
| `(double w, double h)` | parameters, each with a type |

### Return types you'll use most

| Return type | Example `return` | JS equivalent |
|-------------|------------------|---------------|
| `int` / `long` | `return 42;` | number |
| `double` | `return 9.5;` | number |
| `boolean` | `return a > b;` | boolean |
| `char` | `return 'x';` | one-letter string |
| `String` | `return "hi";` | string |
| `int[]` | `return new int[]{1, 2};` | array |
| `void` | no return value | function with no `return` |

Return the wrong type and the program **won't compile**:

```java
static int half(int n) {
    return n / 2.0;   // error: 2.0 makes a double, but the method promised an int
}
```

### Integer division

`7 / 2` in Java is `3`, not `3.5`, because both sides are `int`. Make one side a `double` to get decimals: `7 / 2.0` is `3.5`.

### char and Strings

```java
String s = "Hello";
s.length();                // 5   (a method here: brackets needed)
s.charAt(0);               // 'H' (a char)
Character.toLowerCase('H') // 'h'
```

### Methods calling methods

```java
static boolean isVowel(char ch) { ... }

static int countVowels(String s) {
    int count = 0;
    for (int i = 0; i < s.length(); i++) {
        if (isVowel(s.charAt(i))) count++;
    }
    return count;
}
```

## Questions

Solve them in order in `Day03.java`, then run `npm run test:java`.

| # | Method | Returns |
|---|--------|---------|
| Q1 | `rectangleArea(double w, double h)` | `double` |
| Q2 | `celsiusToFahrenheit(double c)` | `double` |
| Q3 | `isVowel(char ch)` | `boolean` |
| Q4 | `greet(String name)` | `String` |
| Q5 | `maxOfArray(int[] arr)` | `int` |
| Q6 | `countVowels(String s)` | `int` |
| Q7 | `isPrime(int n)` | `boolean` |
