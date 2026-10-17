public class Day03Test {
    public static void main(String[] args) {
        Check.eq("rectangleArea(4, 2.5)", () -> Day03.rectangleArea(4, 2.5), 10.0);
        Check.eq("rectangleArea(0, 9)", () -> Day03.rectangleArea(0, 9), 0.0);
        Check.eq("celsiusToFahrenheit(100)", () -> Day03.celsiusToFahrenheit(100), 212.0);
        Check.eq("celsiusToFahrenheit(37) rounded", () -> Math.round(Day03.celsiusToFahrenheit(37) * 10) / 10.0, 98.6);
        Check.eq("isVowel('a')", () -> Day03.isVowel('a'), true);
        Check.eq("isVowel('E')", () -> Day03.isVowel('E'), true);
        Check.eq("isVowel('b')", () -> Day03.isVowel('b'), false);
        Check.eq("greet(\"Riya\")", () -> Day03.greet("Riya"), "Hello, Riya!");
        Check.eq("maxOfArray({3, 9, 2})", () -> Day03.maxOfArray(new int[]{3, 9, 2}), 9);
        Check.eq("maxOfArray({-5, -2, -8})", () -> Day03.maxOfArray(new int[]{-5, -2, -8}), -2);
        Check.eq("countVowels(\"Programming\")", () -> Day03.countVowels("Programming"), 3);
        Check.eq("countVowels(\"xyz\")", () -> Day03.countVowels("xyz"), 0);
        Check.eq("isPrime(7)", () -> Day03.isPrime(7), true);
        Check.eq("isPrime(9)", () -> Day03.isPrime(9), false);
        Check.eq("isPrime(2)", () -> Day03.isPrime(2), true);
        Check.eq("isPrime(1)", () -> Day03.isPrime(1), false);
        Check.eq("isPrime(97)", () -> Day03.isPrime(97), true);
        Check.done();
    }
}
