# JS for DSA · 10 days

Just enough JavaScript, understood properly, to start data structures and algorithms. Every day is one topic, with the DSA pattern it unlocks. Advanced JavaScript (classes, promises, `async / await`, modules, the event loop) is **not** here; it comes later (see [ROADMAP.md](../ROADMAP.md)).

## Each day

| Step | Time | What |
|------|------|------|
| Concept | ≈15 min | open `day-NN/concept.html` in your browser: animated code you can play step by step, plus "predict the output" cards |
| Questions | ≈25 min | solve `day-NN/questions.js` in order. Each question has **Steps** comments: try without them first |
| Check | ≈5 min | `npm test`, then commit and push |

`day-NN/README.md` is the same concept in short, for reading on GitHub. Start from [`index.html`](index.html) (open it from your clone; GitHub shows HTML as source code).

## Days

| Day | Topic | DSA idea it unlocks |
|-----|-------|---------------------|
| [1](day-01) | numbers, operators and digits | digit extraction, first look at O(log n) |
| [2](day-02) | loops and counting steps | O(n), O(n²), O(√n) |
| [3](day-03) | functions, scope and helpers | breaking a problem up, the call stack |
| [4](day-04) | arrays: traversal and linear search | linear search, prefix sums |
| [5](day-05) | arrays in place: swap and two pointers | two pointers, in-place algorithms |
| [6](day-06) | strings | string traversal, run-length counting |
| [7](day-07) | objects as hash maps | frequency counting, two-sum |
| [8](day-08) | `Map` and `Set` | O(1) lookups, sliding window with a set |
| [9](day-09) | sorting, array methods and sliding window | comparators, fixed-size windows |
| [10](day-10) | 2D arrays, recursion and binary search | grids, recursion, O(log n) search |

## Running the tests

```bash
npm test                                        # everything, both tracks
npm run test:dsa                                # only this track
node --test js-for-dsa/day-04/questions.test.js # only one day
```

As in the main track, an unsolved question is **skipped**, and a wrong answer **fails** and shows the expected value.
