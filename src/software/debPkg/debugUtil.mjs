// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'acpi',
    // ¬focal 'dconf-tools',    // <-- dconf != debconf; includes dconf-editor
    'debconf-utils',
    'htop',
    'iotop',
    'lsof',
    'mmc-utils',  // debug memory card slots
    'units',      // convert disk size prefixes
    'usbutils',   // lsusb
    // ¬focal 'winpdb',
  ]);
};
