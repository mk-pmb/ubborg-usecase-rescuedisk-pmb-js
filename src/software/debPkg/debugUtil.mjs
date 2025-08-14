// -*- coding: utf-8, tab-width: 2 -*-

import osVerInfo from 'ubborg-sysfacts-helper-pmb/util/osVersionInfo.mjs';

const straceAndFriends = [
  'libc-dev-bin => cmd:mtrace',
  'ltrace => cmd:',
  'strace => cmd:',
];

export default async (bun) => {
  const { verNumYear } = await osVerInfo(bun);
  bun.needs('debPkg', [
    ...straceAndFriends,
    'acpi => cmd:',
    'cpuid => cmd:',
    ((verNumYear <= 18) && 'dconf-tools'), // <-- != debconf; has dconf-editor
    'debconf-utils => cmd:debconf-get-selections',
    ((verNumYear <= 22) && 'hddtemp => cmd:'),
    'htop => cmd:',
    'iotop => cmd:',
    'lm-sensors => cmd:sensors-detect',
    'lshw => cmd:',
    'lsof => cmd:',
    'mmc-utils',  // debug memory card slots
    'powertop => cmd:',
    'smem => cmd:',
    'smemstat => cmd:',
    'units => cmd:',      // convert disk size prefixes
    'usbutils => cmd:lsusb',
    // 'uuid',    // nah. just cat /proc/sys/kernel/random/uuid
    ((verNumYear <= 18) && 'winpdb'),
  ].filter(Boolean));
};
