#!/usr/bin/env bash
# Check your JS for DSA answers.
#   ./check.sh 1    check Day 1
#   ./check.sh      check every day
# Unsolved questions are skipped, so you can check after every single question.
cd "$(dirname "$0")" || exit 1

if [ -z "$1" ]; then
  files=(js-for-dsa/day-*/questions.test.js)
  echo "Checking every day..."
elif [[ "$1" =~ ^[0-9]+$ ]] && [ -f "js-for-dsa/day-$(printf %02d "$((10#$1))")/questions.test.js" ]; then
  day=$(printf %02d "$((10#$1))")
  files=("js-for-dsa/day-$day/questions.test.js")
  echo "Checking Day $((10#$1))..."
else
  echo "There is no Day $1. Try: ./check.sh 1"
  exit 1
fi

node --test --test-reporter=spec "${files[@]}"
