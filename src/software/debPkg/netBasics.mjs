// -*- coding: utf-8, tab-width: 2 -*-

import osVerInfo from 'ubborg-sysfacts-helper-pmb/util/osVersionInfo.mjs';

export default async (bun) => {
  const { verNumYear } = await osVerInfo(bun);
  bun.needs('debPkg', [
    'avahi-daemon',
    'avahi-discover',
    'avahi-utils',
    ((verNumYear <= 22) && 'python-avahi'),

    'ethtool', // required for ../../workarounds/focal/files/disable_ethernet_powersave_on_buggy_adapters.sh

    'ifupdown',
    'libnss-mdns',
    'libnss-myhostname',
    'net-tools => cmd:ifconfig',
    'networkd-dispatcher',
    'syslinux-utils => cmd:gethostip',

    'iw',
    'wireless-tools => cmd:iwlist',
    'rfkill',
  ].filter(Boolean));
};
