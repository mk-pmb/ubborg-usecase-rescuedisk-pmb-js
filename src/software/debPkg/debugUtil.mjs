// -*- coding: utf-8, tab-width: 2 -*-

const straceAndFriends = [
  'libc-dev-bin => cmd:mtrace',
  'ltrace',
  'strace',
];

export default async(bun) => {
  bun.needs('debPkg', [
    ...straceAndFriends,
    'acpi',
    'cpuid',
    // ¬focal 'dconf-tools',    // <-- dconf != debconf; includes dconf-editor
    'debconf-utils',
    'hddtemp',
    'htop',
    'iotop',
    'lshw',
    'lsof',
    'mmc-utils',  // debug memory card slots
    'powertop',
    'units',      // convert disk size prefixes
    'usbutils',   // lsusb
    // ¬focal 'winpdb',
  ]);
};
