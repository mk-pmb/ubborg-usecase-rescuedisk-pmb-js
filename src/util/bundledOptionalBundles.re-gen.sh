#!/bin/bash
# -*- coding: utf-8, tab-width: 2 -*-
( grep -Fe '{' -B 9002 -- __main__.mjs
  printf '%s\n' *.mjs | LANG=C sort -V | sed -rf <(echo '
    s~\.mjs~~
    /^__main__$/d
    /^[A-Za-z][A-Za-z0-9_]*$/!{s~^~\x27~;s~$~\x27~}
    s~^~  ~
    s~$~: true,~
    ')
  echo '});'
) | sponge __main__.mjs
