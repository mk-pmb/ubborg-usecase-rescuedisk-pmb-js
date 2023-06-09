// -*- coding: utf-8, tab-width: 2 -*-

import sysFactsHelper from 'ubborg-sysfacts-helper-pmb';

export default async (bun) => {
  const osCn = (await sysFactsHelper.mtd(bun, 'osVersion')()).codename;
  bun.needs('debPkg', [
    'ext3grep',
    'ext4magic',
    'extundelete',

    'udisks2',
    'udiskie',    // a mount helper tray icon

    ((osCn !== 'jammy') && 'gvfs-bin'),   // provides basic GIO support
    'gvfs-fuse',

    'exfat-fuse',
    ((osCn !== 'jammy') && 'exfat-utils'),
    'fatattr',
    'fatresize',
    'ntfs-3g',

    'hfsplus',
    'hfsprogs',
    'hfsutils',
    'hfsutils-tcltk', // provides "hfs", the HFS volume manipulation tool.
  ].filter(Boolean));
};
