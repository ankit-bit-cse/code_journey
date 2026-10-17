public class Day01Test {
    public static void main(String[] args) {
        Check.eq("isEven(4)", () -> Day01.isEven(4), true);
        Check.eq("isEven(7)", () -> Day01.isEven(7), false);
        Check.eq("isEven(-6)", () -> Day01.isEven(-6), true);
        Check.eq("evenOrOdd(10)", () -> Day01.evenOrOdd(10), "even");
        Check.eq("evenOrOdd(-3)", () -> Day01.evenOrOdd(-3), "odd");
        Check.eq("isPositive(5)", () -> Day01.isPositive(5), true);
        Check.eq("isPositive(0)", () -> Day01.isPositive(0), false);
        Check.eq("signOf(9)", () -> Day01.signOf(9), "positive");
        Check.eq("signOf(-1)", () -> Day01.signOf(-1), "negative");
        Check.eq("signOf(0)", () -> Day01.signOf(0), "zero");
        Check.eq("largestOfThree(4, 9, 2)", () -> Day01.largestOfThree(4, 9, 2), 9);
        Check.eq("largestOfThree(2, 4, 9)", () -> Day01.largestOfThree(2, 4, 9), 9);
        Check.eq("largestOfThree(-3, -1, -2)", () -> Day01.largestOfThree(-3, -1, -2), -1);
        Check.eq("grade(95)", () -> Day01.grade(95), "A");
        Check.eq("grade(75)", () -> Day01.grade(75), "B");
        Check.eq("grade(50)", () -> Day01.grade(50), "C");
        Check.eq("grade(49)", () -> Day01.grade(49), "F");
        Check.done();
    }
}
