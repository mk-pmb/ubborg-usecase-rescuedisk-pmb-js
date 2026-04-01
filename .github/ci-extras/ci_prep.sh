#!/bin/bash
# -*- coding: utf-8, tab-width: 2 -*-

echo '[ci_prep] D: Start!'

# Test with the experimental ubborg planner:
PKG='ubborg-planner-pmb'
R_WHAT='^( +"('$PKG')": *")[^"]+'
R_WITH='\1'"$GITHUB_REPOSITORY_OWNER"'/\2-js@experimental'
sed -re "s~$R_WHAT~$R_WITH~" -i package.json
sed -re "/'$PKG'/d" -i -- test/devDepsHelper.mjs

git log --oneline -n 1
git diff HEAD
echo '[ci_prep] D: Done.'
