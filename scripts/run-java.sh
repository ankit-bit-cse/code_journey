#!/usr/bin/env bash
# Compile every Java day and run its *Test class.   Usage: npm run test:java
set -euo pipefail
cd "$(dirname "$0")/.."
rm -rf out && mkdir out
javac -d out scripts/Check.java days/*/java/*.java
status=0
for f in days/*/java/*Test.java; do
  cls=$(basename "$f" .java)
  echo "== $cls ($(dirname "$f"))"
  java -cp out "$cls" || status=1
done
exit $status
