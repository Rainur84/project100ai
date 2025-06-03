#!/bin/bash
echo "// trigger rebuild" > src/temp.ts
git add .
git commit -m "chore: manual rebuild to update news"
git push