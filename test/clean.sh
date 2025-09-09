#!/bin/bash
# -*- coding: utf-8, tab-width: 2 -*-
set -o pipefail -o errexit
cd -- "$(readlink -m -- "$BASH_SOURCE"/..)"
find example_plans/ -mount -maxdepth 5 -type f -name '*.tmp.plusText.txt' -delete
