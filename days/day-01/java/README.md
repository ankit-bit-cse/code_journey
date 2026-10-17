# Day 1 · Java · Hello World, types, if / else

You already know if/else from JavaScript. Java has it too. The big difference: **Java wants to know the type of everything.**

## Concept

### Hello, World

```java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

- Every Java program lives inside a **class**. The file name must match the class name: `Hello.java`.
- The program starts running at `main`.
- `System.out.println(...)` is Java's `console.log(...)`.
- Every statement ends with `;`. In Java it's required.

Run it:

```bash
javac Hello.java   # compile: checks your code and turns it into Hello.class
java Hello         # run it
```

### Variables have types

| JavaScript | Java | Holds |
|------------|------|-------|
| `let age = 15;` | `int age = 15;` | whole numbers |
| `let price = 9.5;` | `double price = 9.5;` | decimal numbers |
| `let ok = true;` | `boolean ok = true;` | true / false |
| `let name = "Riya";` | `String name = "Riya";` | text (capital **S**) |
| `let ch = "a";` | `char ch = 'a';` | one character, in single quotes |

Once a variable is an `int`, it can never hold a `String`. The compiler stops you **before** the program runs, which catches many bugs early.

### Methods declare their return type

In Java a function is called a **method**.

```js
// JavaScript
function isEven(n) {
  return n % 2 === 0;
}
```

```java
// Java
static boolean isEven(int n) {
    return n % 2 == 0;
}
```

- `boolean` before the name is the **return type**: this method must return true or false.
- `int n`: the parameter has a type too.
- Java uses `==` to compare numbers. There is no `===`.

### if / else looks the same

```java
int marks = 82;
if (marks >= 90) {
    System.out.println("A");
} else if (marks >= 75) {
    System.out.println("B");
} else {
    System.out.println("C");
}
```

`&&`, `||` and `!` work exactly like in JavaScript.

### Comparing Strings

For text, use `.equals()`, never `==`:

```java
String a = "even";
a.equals("even");   // true
```

## Questions

Solve them in order in `Day01.java`, then run:

```bash
npm run test:java
```

You can also try your own code: fill in `main` and run `javac Day01.java && java Day01` inside this folder.

| # | Method | Returns |
|---|--------|---------|
| Q1 | `isEven(int n)` | `boolean` |
| Q2 | `evenOrOdd(int n)` | `String`: `"even"` / `"odd"` |
| Q3 | `isPositive(int n)` | `boolean` |
| Q4 | `signOf(int n)` | `String`: `"positive"` / `"negative"` / `"zero"` |
| Q5 | `largestOfThree(int a, int b, int c)` | `int` |
| Q6 | `grade(int marks)` | `String`: `"A"` / `"B"` / `"C"` / `"F"` |
