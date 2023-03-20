// -*- coding: utf-8, tab-width: 2 -*-

const gparted = [
  'gparted => cmd:',

  // Stuff required by gparted for…
  'gpart => cmd:',    // "Attempt data rescue"
  'dosfstools',       // FAT
  'mtools',           // setting FAT labels
];

const lvm = [
  'lvm2',
  'cryptsetup => cmd:',
  'cryptsetup-initramfs', // initrd hooks are separate starting in 20.04
];

export default async (bun) => {
  bun.needs('debPkg', [
    'hdparm => cmd:',
    'util-linux => cmd:sfdisk',
    ...gparted,
    ...lvm,
    'dmsetup => cmd:',    // no longer a default in Ubuntu Xenial
  ]);
  bun.needs('file', [
    '/FL =-> dev/disk/by-label',    // FL = File system Label
    '/PL =-> dev/disk/by-partlabel',
  ]);
};
