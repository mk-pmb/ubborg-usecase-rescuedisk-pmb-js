// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'extundelete',

    'udisks2',
    'udiskie',    // a mount helper tray icon

    'gvfs-bin',   // provides basic GIO support
    'gvfs-fuse',

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
