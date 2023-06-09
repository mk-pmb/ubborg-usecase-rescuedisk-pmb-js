// -*- coding: utf-8, tab-width: 2 -*-

import sysFactsHelper from 'ubborg-sysfacts-helper-pmb';

export default async (bun) => {
  const osCn = (await sysFactsHelper.mtd(bun, 'osVersion')()).codename;
  bun.needs('debPkg', [
    'avahi-daemon',
    'avahi-discover',
    'avahi-utils',
    ((osCn !== 'jammy') && 'python-avahi'),

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
