// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'avahi-daemon',
    'avahi-discover',
    'avahi-utils',
    'python-avahi',

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
  ]);
};
