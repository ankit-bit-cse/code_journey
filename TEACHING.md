# For the teacher: adding a day

Work on your own branch, `pappukrs`, and merge into `main` with a pull request (Ankit works on `ankit`).

```bash
git checkout pappukrs
git pull origin main
npm run new-day -- "while loops and patterns" "while loops and patterns"
```

That creates `days/day-NN/` with a README, a question file and a test file for each language, with one example question in each.

1. **Concept** (≈15 min of reading): write it in `javascript/README.md` and `java/README.md`. Simple words, one small example per idea, and for Java a JS-vs-Java comparison where it helps.
2. **Questions** (≈25 min of solving): 6–10 for JS, 5–8 for Java, from easy to hard. Later questions should reuse earlier ones (`countVowels` uses `isVowel`). Put examples in the comment above each stub.
3. **Tests**:
   - JS: `check(q.fn, [[[args...], expected], ...])` in `questions.test.js`. Include edge cases: 0, negatives, empty arrays, empty strings.
   - Java: `Check.eq("call as text", () -> DayNN.fn(args), expected);` in `DayNNTest.java`. Use `120L` for `long`, `10.0` for `double`, and `List.of(...)` with the `list()` helper for arrays (see `Day02Test.java`).
4. Run `npm test` and `npm run test:java`: every new question should show **skipped**.
5. Add the day to the table in `README.md` and a row in `PROGRESS.md`, commit, `git push origin pappukrs`, open a pull request `pappukrs → main` and merge it **before** Ankit's session, so his `git pull origin main` gets the new day.

## Reviewing his pull requests

- The tests already check correctness. Your review is about **how**: naming, unnecessary code, a loop that could be simpler, a missed edge case.
- Ask questions rather than giving answers: "what happens if the array is empty?"
- Merge with **Create a merge commit**, never **Squash and merge**. You both reuse long-lived branches (`ankit`, `pappukrs`); squashing rewrites their commits into a new one, so the branch and `main` drift apart and every later pull request shows false conflicts. A merge commit also keeps his own commits, which is what counts on his profile.
- Tip: in the repo Settings → General → Pull Requests, untick "Allow squash merging" so nobody does it by accident.
