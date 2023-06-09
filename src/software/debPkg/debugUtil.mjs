// -*- coding: utf-8, tab-width: 2 -*-

import sysFactsHelper from 'ubborg-sysfacts-helper-pmb';

const straceAndFriends = [
  'libc-dev-bin => cmd:mtrace',
  'ltrace',
  'strace',
];

export default async (bun) => {
  const osCn = (await sysFactsHelper.mtd(bun, 'osVersion')()).codename;
  bun.needs('debPkg', [
    ...straceAndFriends,
    'acpi',
    'cpuid',
    // ¬focal 'dconf-tools',    // <-- dconf != debconf; includes dconf-editor
    'debconf-utils',
    ((osCn !== 'jammy') && 'hddtemp'),
    'htop',
    'iotop',
    'lshw',
    'lsof',
    'mmc-utils',  // debug memory card slots
    'powertop',
    'units',      // convert disk size prefixes
    'usbutils',   // lsusb
    // 'uuid',    // nah. just cat /proc/sys/kernel/random/uuid
    // ¬focal 'winpdb',
  ]);
};
