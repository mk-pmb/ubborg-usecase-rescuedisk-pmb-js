#!/bin/bash
# -*- coding: utf-8, tab-width: 2 -*-
BUN_FN='__main__.mjs'
( grep -Fe '{' -B 9002 -m 1 -- "$BUN_FN"
  printf '%s\n' *.mjs | LANG=C sort -V | sed -rf <(echo '
    s~\.mjs~~
    /^__[a-z]+__$/d
    /^[A-Za-z][A-Za-z0-9_]*$/!{s~^~\x27~;s~$~\x27~}
    s~^~  ~
    s~$~: true,~
    ')
  grep -Fe '}' -A 9002 -- "$BUN_FN"
) | sponge "$BUN_FN"; exit $?
