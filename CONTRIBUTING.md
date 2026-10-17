# Daily workflow

## One-time setup

1. Use the **same email as your GitHub account**, or your commits won't show on your GitHub profile:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "the-email-on-your-github-account@example.com"
   ```
2. Clone the repo and check the tests run:
   ```bash
   git clone <repo URL>
   cd learn-to-code
   npm test
   ```

## Every day

```bash
# 1. Get the new day's concepts and questions
git checkout main
git pull

# 2. Make a branch for today's work
git checkout -b day-04

# 3. JavaScript session (45 min): read days/day-04/javascript/README.md, solve questions.js
npm test

# 4. Java session (45 min): read days/day-04/java/README.md, solve Day04.java
npm run test:java

# 5. Save your work. Commit after each question or two, not only at the end.
git add days/day-04
git commit -m "Day 4: solve JS Q1-Q5"
git push -u origin day-04
```

Then on GitHub: **Compare & pull request** → write what you found easy or hard → **Create pull request**.

Your teacher reviews it: comments on lines, suggestions, maybe "try again with a loop". Fix things on the same branch, `git push` again, and the pull request updates. When it's approved, it gets merged into `main`. Tick the day off in `PROGRESS.md`.

## Rules

- **Solve the questions in order.** Later questions often use earlier ones.
- **Don't change the test files.** If a test seems wrong, ask.
- **Don't copy answers from the internet or AI.** Being stuck for 10 minutes is how you learn. Write what you tried in the pull request instead.
- Small commits with clear messages: `Day 2: countEvenOdd with a loop`, not `update`.

## Stuck?

1. Re-read the concept section of that day's README.
2. Add `console.log(...)` (JS) or `System.out.println(...)` (Java) to see what your code is doing.
3. Run just one day: `node --test days/day-02/`
4. Still stuck: push what you have and ask in the pull request.
