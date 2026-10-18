# code-journey

Learning programming one day at a time: **JavaScript** and **Java**, side by side, from the basics to advanced topics, then DSA and web development.

Every day has two 45-minute sessions:

| Session | Time | What happens |
|---------|------|--------------|
| JavaScript | 45 min | read `days/day-NN/javascript/README.md`, then solve `questions.js` |
| Java | 45 min | read `days/day-NN/java/README.md`, then solve `DayNN.java` |

Each session: **~15 min concept → ~25 min questions → ~5 min test, commit, push.**

## Days

| Day | JavaScript | Java |
|-----|-----------|------|
| [1](days/day-01) | [if / else](days/day-01/javascript/README.md) | [Hello World, types, if / else](days/day-01/java/README.md) |
| [2](days/day-02) | [for loops](days/day-02/javascript/README.md) | [for loops and arrays](days/day-02/java/README.md) |
| [3](days/day-03) | [functions and return values](days/day-03/javascript/README.md) | [methods and return types](days/day-03/java/README.md) |

## JS for DSA (10-day track)

[`js-for-dsa/`](js-for-dsa) is a 10-day JavaScript track that gets you ready for DSA: numbers and digits, loops and counting steps, functions, arrays and two pointers, strings, objects and `Map`/`Set` as hash maps, sorting and sliding windows, then grids, recursion and binary search. Every day has an **animated lesson** (`concept.html`, open it in your browser) and 8 scaffolded questions. Start at [`js-for-dsa/index.html`](js-for-dsa/index.html); details in [its README](js-for-dsa/README.md).

What's coming next: [ROADMAP.md](ROADMAP.md). What's done: [PROGRESS.md](PROGRESS.md).

## Setup (once)

You need [Node.js](https://nodejs.org) 20+ and [Java (JDK)](https://adoptium.net) 17+.

```bash
git clone <this repo's URL>
cd code-journey
npm test              # JavaScript questions (both tracks)
npm run test:java     # Java questions
```

No `npm install` needed: the tests use only what Node and Java already include.

## How the tests work

- A question you haven't solved yet is **skipped**, not failed. Solve one at a time.
- A wrong answer **fails** and tells you exactly what was expected:
  `isEven(4) should return true but returned false`
- Every push and pull request runs all the tests on GitHub too (the **Actions** tab): ✅ means everything you solved is correct.

Branches: `ankit` (solutions) and `pappukrs` (new days) each merge into `main` through pull requests. Daily workflow: [CONTRIBUTING.md](CONTRIBUTING.md). Adding a day: [TEACHING.md](TEACHING.md).
