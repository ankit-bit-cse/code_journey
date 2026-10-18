#!/usr/bin/env bash
# Check your answers.
#   ./check.sh 1        JS for DSA, Day 1
#   ./check.sh dsa 1    DSA, Day 1
#   ./check.sh          every JS for DSA day
#   ./check.sh dsa      every DSA day
# Unsolved questions are skipped, so you can check after every single question.
cd "$(dirname "$0")" || exit 1

track=js-for-dsa
name="JS for DSA"
if [ "$1" = "dsa" ]; then
  track=dsa
  name="DSA"
  shift
fi

if [ -z "$1" ]; then
  files=("$track"/day-*/questions.test.js)
  echo "Checking every $name day..."
elif [[ "$1" =~ ^[0-9]+$ ]] && [ -f "$track/day-$(printf %02d "$((10#$1))")/questions.test.js" ]; then
  files=("$track/day-$(printf %02d "$((10#$1))")/questions.test.js")
  echo "Checking $name Day $((10#$1))..."
else
  echo "There is no $name Day $1 yet. Try: ./check.sh 1  or  ./check.sh dsa 1"
  exit 1
fi

node --test --test-reporter=spec "${files[@]}"
