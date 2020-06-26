// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'udisks2',
    'udiskie',    // A mount helper tray icon

    'fatresize',
    'exfat-fuse',
    'exfat-utils',
    'ntfs-3g',
  ]);
};
