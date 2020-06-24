#!/bin/bash
# -*- coding: utf-8, tab-width: 2 -*-


function all () {
  export LANG{,UAGE}=en_US.UTF-8  # make error messages search engine-friendly
  local SELFPATH="$(readlink -m -- "$BASH_SOURCE"/..)"
  cd -- "$SELFPATH" || return $?

  local PLAN=
  for PLAN in example_plans/*.mjs; do
    PLAN="${PLAN%.mjs}"
    check_plan || return $?
  done

  local DIFFS=( example_plans/tmp.*.diff )
  if [ "${#DIFFS[@]}" -le 1 -a ! -f "${DIFFS[0]}" ]; then
    echo "+OK all tests passed."
    return 0
  fi

  echo "E: Some outputs differ from expectations." >&2
  return 4
}


function check_plan () {
  local OK_FMTS=
  FMT=plusText      FEXT=txt            check_fmt || return $?
  FMT=flatTodoJson  FEXT=flatTodo.json  check_fmt || return $?
  [ -n "$OK_FMTS" ] || return 3$(
    echo "E: no formats checked for plan '$PLAN'" >&2)
}


function check_fmt () {
  local EXPECTED="$PLAN.want.$FMT.$FEXT"
  [ -f "$EXPECTED" ] || return 0
  local TMP_DEST="$PLAN.tmp.$FMT.$FEXT"
  local DIFF_DEST="$PLAN.tmp.$FMT.diff"
  ubborg-planner-pmb depsTree "$PLAN" | ./censor."$FMT".sed \
    >"$TMP_DEST" || return $?
  if diff -U 2 -- "$EXPECTED" "$TMP_DEST" >"$DIFF_DEST"; then
    rm --one-file-system -- "$DIFF_DEST" "$TMP_DEST"
  else
    echo "W: $(wc --lines -- $DIFF_DEST)"
    head -- "$DIFF_DEST" | sed -re 's~^~    ~'
  fi
  OK_FMTS+="$FMT,"
}










[ "$1" == --lib ] && return 0; all "$@"; exit $?
