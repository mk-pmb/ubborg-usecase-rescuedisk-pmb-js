// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'avahi-daemon',
    'avahi-discover',
    'avahi-utils',
    'python-avahi',

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
