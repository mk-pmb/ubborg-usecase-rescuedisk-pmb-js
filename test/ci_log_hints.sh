#!/bin/bash
# -*- coding: utf-8, tab-width: 2 -*-


function clh_init () {
  export LANG{,UAGE}=en_US.UTF-8  # make error messages search engine-friendly
  local SELFPATH="$(readlink -m -- "$BASH_SOURCE"/..)"
  cd -- .ghciu/logs.local || return $?
  local LOGFILE='npm.log'
  clh_maybe_while_planning || true
}


function clh_maybe_while_planning () {
  local EWP='err-while-planning.txt'
  grep -m 1 -Fe 'VError: While planning ' -- "$LOGFILE" |
    LANG=C "$SELFPATH"/err_while_planning.sed | tee -- "$EWP"
  [ -s "$EWP" ] || return 0
  ( echo; echo -n '* '; cat -- "$EWP"; echo ) >>"$GITHUB_STEP_SUMMARY"
}








clh_init "$@"; exit $?
