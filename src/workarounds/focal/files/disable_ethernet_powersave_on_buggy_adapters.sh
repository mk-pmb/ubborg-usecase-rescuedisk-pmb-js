#!/bin/bash
# -*- coding: utf-8, tab-width: 2 -*-

function dis_eee () {
  local ADAPTERS=()
  readarray -t ADAPTERS < <(

    ### I218-LM
    # "Ethernet controller: Intel Corporation Ethernet Connection I218-LM"
    # is known to have power management bugs in Ubuntu focal.
    # In my case, its Rx part doesn't awake properly from standby (suspend),
    # so I have to disable EEE (Energy-Efficient Ethernet) before standby.
    guess_eth_names_by_mac_prefix '28:d2:44:'

    )
  [ "${#ADAPTERS[@]}" -ge 1 ] || return 0
  local ADAPTER=
  local STATUS=
  local FAILS=0
  local MODIFIED=
  for ADAPTER in "${ADAPTERS[@]}"; do
    STATUS="$(LANG=C ethtool --show-eee "$ADAPTER")"
    STATUS="${STATUS//[ $'\t']/}"
    STATUS=$'\n'"$STATUS"$'\n'
    echo -n "Disabling EEE on $ADAPTER: "
    case "$STATUS" in
      *$'\nEEEstatus:disabled\n'* )
        echo "already disabled."
        continue;;
    esac
    if ethtool --set-eee "$ADAPTER" eee off; then
      MODIFIED=+
      echo "disabled."
    elif [ "$FAILS" -ge 99 ]; then
      true
    else
      (( FAILS += 1 ))
    fi
  done

  [ -z "$MODIFIED" ] || sleep 2s
  # ^-- Give the adapters some time to adapt to the changes:
  #   * I218-LM needs 2s (tested 2021-08-28)

  return "$FAILS"
}


function guess_eth_names_by_mac_prefix () {
  local SED_MATCH='\!  link/ether '"$1"'!'
  local SED_EXTRACT='s~^[0-9]+: (\S+): .*$~\1~p'
  LANG=C ip -oneline link show | LANG=C sed -nre "$SED_MATCH $SED_EXTRACT"
}


dis_eee "$@"; exit $?
