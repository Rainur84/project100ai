#!/bin/bash

echo "// trigger rebuild $(date)" >> src/temp.ts
git add .
git commit -m "chore: trigger rebuild for news update"
git push