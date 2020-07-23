// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'acpi',
    // ¬focal 'dconf-tools',    // <-- dconf != debconf; includes dconf-editor
    'cpuid',
    'debconf-utils',
    'hddtemp',
    'htop',
    'iotop',
    'lshw',
    'lsof',
    'powertop',
    'mmc-utils',  // debug memory card slots
    'units',      // convert disk size prefixes
    'usbutils',   // lsusb
    // ¬focal 'winpdb',
  ]);
};
