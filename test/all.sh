#!/bin/bash
# -*- coding: utf-8, tab-width: 2 -*-


function all () {
  export LANG{,UAGE}=en_US.UTF-8  # make error messages search engine-friendly
  local SELFPATH="$(readlink -m -- "$BASH_SOURCE"/..)"
  cd -- "$SELFPATH" || return $?

  case "$1" in
    '' ) ;;
    owr ) DIFFMODE="$1" exec smart-less-pmb -e ./all.sh; return $?;;
    * ) echo "E: unsupported option: '$1'" >&2; return 3;;
  esac

  check_for_banned_strings || return $?

  SECONDS=0
  echo 'D: lint…'
  ( cd .. && elp ) || return $?
  echo "D: linting took ≈ $SECONDS seconds."

  SECONDS=0
  export UBBORG_TIMEOUT_FACTOR=20

  local PLAN= ERR_CNT=0
  for PLAN in example_plans/*.mjs; do
    PLAN="${PLAN%.mjs}"
    check_plan || (( ERR_CNT += 1 ))
  done

  check_for_banned_strings || return $?

  local DIFFS=( example_plans/*.tmp.*.diff )
  echo ":total_duration_sec=$SECONDS"
  if [ "${#DIFFS[@]}" -le 1 -a ! -f "${DIFFS[0]}" ]; then
    if [ "$ERR_CNT" == 0 ]; then
      echo "+OK all tests passed."
      return 0
    else
      echo "-ERR No diffs but $ERR_CNT tests failed." >&2
      return 4
    fi
  fi

  echo "-ERR Some outputs differ from expectations." >&2
  return 4
}


function check_plan () {
  local OK_FMTS=
  FMT=plusText      FEXT=txt            check_fmt || return $?
  FMT=flatTodoJson  FEXT=flatTodo.json  check_fmt || return $?
  [ -n "$OK_FMTS" ] || return 3$(
    echo "E: no formats checked for plan '$PLAN'" >&2)
}


function safemv () { mv --verbose --no-target-directory --no-clobber -- "$@"; }


function check_fmt () {
  local EXPECTED="$PLAN.want.$FMT.$FEXT"
  [ -f "$EXPECTED" ] || return 0
  local TMP_DEST="$PLAN.tmp.$FMT.$FEXT"
  local DIFF_DEST="$PLAN.tmp.$FMT.diff"
  ubborg-planner-pmb depsTree "$PLAN" | ./censor."$FMT".sed >"$TMP_DEST"
  [ "${PIPESTATUS[*]}" == '0 0' ] || return 2
  if diff -U 2 -- "$EXPECTED" "$TMP_DEST" >"$DIFF_DEST"; then
    rm --one-file-system -- "$DIFF_DEST" "$TMP_DEST"
  else
    echo "W: $(wc --lines -- $DIFF_DEST)"
    head -- "$DIFF_DEST" | sed -re 's~^~    ~'
    if [ "$DIFFMODE" == owr ]; then
      safemv "$EXPECTED"{,.$$.bak}
      safemv "$TMP_DEST" "$EXPECTED"
    fi
  fi
  OK_FMTS+="$FMT,"
}


function check_for_banned_strings () {
  echo "D: ${FUNCNAME//_/ }…"
  local BANS="$(grep -Pe '^[^#]' -- banned_strings.txt)"
  [ -n "$BANS" ] || return 4$(echo 'E: Failed to read ban list.' >&2)
  BANS="${BANS//$'\n'/'|'}"
  ( cd .. && git grep -nPie "$BANS"
  ) | grep -vPe '^test/banned_strings\.txt:' || return 0
  echo 'E: Found some banned strings.'
  return 2
}










all "$@"; exit $?
