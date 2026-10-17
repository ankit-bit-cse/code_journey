import java.util.Arrays;
import java.util.List;

public class Day02Test {
    public static void main(String[] args) {
        Check.eq("sumTo(4)", () -> Day02.sumTo(4), 10);
        Check.eq("sumTo(100)", () -> Day02.sumTo(100), 5050);
        Check.eq("countEvensUpTo(10)", () -> Day02.countEvensUpTo(10), 5);
        Check.eq("countEvensUpTo(7)", () -> Day02.countEvensUpTo(7), 3);
        Check.eq("countPositives({3, -1, 0, 8})", () -> Day02.countPositives(new int[]{3, -1, 0, 8}), 2);
        Check.eq("countPositives({})", () -> Day02.countPositives(new int[]{}), 0);
        Check.eq("sumOfEvens({1, 2, 3, 4})", () -> Day02.sumOfEvens(new int[]{1, 2, 3, 4}), 6);
        Check.eq("sumOfEvens({-2, 10})", () -> Day02.sumOfEvens(new int[]{-2, 10}), 8);
        Check.eq("table(3)", () -> list(Day02.table(3)), List.of(3, 6, 9, 12, 15, 18, 21, 24, 27, 30));
        Check.eq("factorial(5)", () -> Day02.factorial(5), 120L);
        Check.eq("factorial(0)", () -> Day02.factorial(0), 1L);
        Check.eq("factorial(20)", () -> Day02.factorial(20), 2432902008176640000L);
        Check.eq("countDigits(4502)", () -> Day02.countDigits(4502), 4);
        Check.eq("countDigits(7)", () -> Day02.countDigits(7), 1);
        Check.done();
    }

    static List<Integer> list(int[] a) {
        return a == null ? null : Arrays.stream(a).boxed().toList();
    }
}
