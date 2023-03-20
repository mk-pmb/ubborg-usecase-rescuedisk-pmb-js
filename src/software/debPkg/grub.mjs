// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'grub2-common => cmd:grub-install',
    'grub-efi-amd64-bin',
    'grub-efi-ia32-bin',
    'grub-pc-bin',

    'efibootmgr => cmd:',
  ]);
};
