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
   cd code-journey
   npm test
   ```

## Branches

| Branch | Who works on it |
|--------|-----------------|
| `main` | the finished, reviewed work. Nobody commits here directly |
| `ankit` | Ankit: your solutions |
| `pappukrs` | the teacher: new days, concepts and questions |

Each person only works on their own branch and merges into `main` through a pull request. You mostly touch different files (new days vs. your solutions), so conflicts are rare.

## Every day

```bash
# 1. Switch to your branch and bring in the new day from main
git checkout ankit
git pull origin main          # ALWAYS do this first: it gets today's concepts and questions

# 2. JavaScript session (45 min): read days/day-04/javascript/README.md, solve questions.js
npm test

# 3. Java session (45 min): read days/day-04/java/README.md, solve Day04.java
npm run test:java

# 4. Save your work. Commit after each question or two, not only at the end.
git add days/day-04
git commit -m "Day 4: solve JS Q1-Q5"
git push origin ankit
```

Then on GitHub: open a pull request **from `ankit` into `main`** (or, if one is already open, your new commits are added to it automatically). Write what you found easy or hard.

The teacher reviews it: comments on lines, suggestions, maybe "try again with a loop". Fix things on `ankit`, `git push` again, and the pull request updates. When it's approved it is merged with **Create a merge commit**, so your commits land in `main` and count on your GitHub profile. Tick the day off in `PROGRESS.md`.

### If `git pull origin main` says CONFLICT

It means you and the teacher changed the same lines. Open the file, look for the `<<<<<<<` / `=======` / `>>>>>>>` markers, keep the right version, delete the markers, then:

```bash
git add <file>
git commit
```

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
