// -*- coding: utf-8, tab-width: 2 -*-

const gparted = [
  'gparted',

  // Stuff required by gparted for…
  'gpart',        // "Attempt data rescue"
  'dosfstools',   // FAT
  'mtools',       // setting FAT labels
];

const lvm = [
  'lvm2',
  'cryptsetup',
  'cryptsetup-initramfs', // initrd hooks are separate starting in 20.04
];

export default async(bun) => {
  bun.needs('debPkg', [
    'util-linux',   // sfdisk
    ...gparted,
    ...lvm,
  ]);
  bun.needs('file', {
    path: '/PL',
    mimeType: 'sym',
    content: 'dev/disk/by-partlabel',
  });
};
