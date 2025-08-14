// -*- coding: utf-8, tab-width: 2 -*-

import osVerInfo from 'ubborg-sysfacts-helper-pmb/util/osVersionInfo.mjs';

export default async (bun) => {
  const { verNumYear } = await osVerInfo(bun);
  bun.needs('debPkg', [
    'ext3grep',
    'ext4magic',
    'extundelete',

    'udisks2',
    'udiskie',    // a mount helper tray icon

    ((verNumYear <= 22) && 'gvfs-bin'),   // provides basic GIO support
    'gvfs-fuse',

    'exfat-fuse',
    ((verNumYear <= 22) && 'exfat-utils'),
    'fatattr',
    'fatresize',
    'ntfs-3g',

    'hfsplus',
    'hfsprogs',
    'hfsutils',
    'hfsutils-tcltk', // provides "hfs", the HFS volume manipulation tool.
  ].filter(Boolean));
};
