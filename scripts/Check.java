// Test helper for Java days. You don't need to edit this file.
// A method that still throws UnsupportedOperationException("TODO") is SKIPPED, not failed.

import java.util.Objects;
import java.util.function.Supplier;

public class Check {
    private static int passed, failed, skipped;

    public static void eq(String call, Supplier<Object> actual, Object expected) {
        Object got;
        try {
            got = actual.get();
        } catch (UnsupportedOperationException e) {
            skipped++;
            System.out.println("  skip  " + call + "  (not solved yet)");
            return;
        } catch (RuntimeException e) {
            failed++;
            System.out.println("  FAIL  " + call + "  threw " + e);
            return;
        }
        if (Objects.equals(got, expected)) {
            passed++;
            System.out.println("  ok    " + call);
        } else {
            failed++;
            System.out.println("  FAIL  " + call + "  expected " + expected + " but got " + got);
        }
    }

    public static void done() {
        System.out.println("  " + passed + " passed, " + failed + " failed, " + skipped + " skipped");
        if (failed > 0) System.exit(1);
    }
}
