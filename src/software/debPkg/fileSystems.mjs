// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'udisks2',
    'udiskie',    // A mount helper tray icon

    'exfat-fuse',
    'exfat-utils',
    'fatattr',
    'fatresize',
    'ntfs-3g',

    'hfsplus',
    'hfsprogs',
    'hfsutils',
    'hfsutils-tcltk', // provides "hfs", the HFS volume manipulation tool.
  ]);
};
