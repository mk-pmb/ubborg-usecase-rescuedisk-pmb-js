#!/bin/bash
# -*- coding: utf-8, tab-width: 2 -*-
set -o pipefail -o errexit
cd -- "$(readlink -m -- "$BASH_SOURCE"/..)"

FIND=(
  example_plans/
  -mount
  -maxdepth 5
  -type f
  '(' -false
    -o -name '*.tmp.plusText.diff'
    -o -name '*.tmp.plusText.txt'
    -o -name '*.want.plusText.txt.*.bak'
    ')'
  -delete
  )
find "${FIND[@]}"
