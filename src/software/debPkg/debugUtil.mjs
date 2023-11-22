// -*- coding: utf-8, tab-width: 2 -*-

import sysFactsHelper from 'ubborg-sysfacts-helper-pmb';

const straceAndFriends = [
  'libc-dev-bin => cmd:mtrace',
  'ltrace => cmd:',
  'strace => cmd:',
];

export default async (bun) => {
  const osCn = (await sysFactsHelper.mtd(bun, 'osVersion')()).codename;
  bun.needs('debPkg', [
    ...straceAndFriends,
    'acpi => cmd:',
    'cpuid => cmd:',
    // ¬focal 'dconf-tools',    // <-- dconf != debconf; includes dconf-editor
    'debconf-utils => cmd:debconf-get-selections',
    ((osCn !== 'jammy') && 'hddtemp => cmd:'),
    'htop => cmd:',
    'iotop => cmd:',
    'lshw => cmd:',
    'lsof => cmd:',
    'mmc-utils',  // debug memory card slots
    'powertop => cmd:',
    'units => cmd:',      // convert disk size prefixes
    'usbutils => cmd:lsusb',
    // 'uuid',    // nah. just cat /proc/sys/kernel/random/uuid
    // ¬focal 'winpdb',
  ]);
};
