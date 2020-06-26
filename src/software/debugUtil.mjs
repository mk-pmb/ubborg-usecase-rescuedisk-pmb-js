// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'acpi',
    'colordiff',
    // ¬focal 'dconf-tools',    // <-- dconf != debconf; includes dconf-editor
    'debconf-utils',
    'file',
    'htop',
    'iotop',
    'lsof',
    'mmc-utils',  // debug memory card slots
    'units',      // convert disk size prefixes
    // ¬focal 'winpdb',
  ]);
};
