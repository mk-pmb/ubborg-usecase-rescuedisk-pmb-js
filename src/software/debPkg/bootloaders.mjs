// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'grub2-common => cmd:grub-install',
    'grub-efi-amd64-bin',
    'grub-efi-ia32-bin',
    'grub-pc-bin',

    'efibootmgr => cmd:',

    'refind¬ => cmd:refind-install', /*
      Unfortunately, that package too eagerly asks annoying questions about
      installing it to the ESP, and (on focal) there seems to be no package
      that provides just `refind-install`.
      With `DEBIAN_FRONTEND=noninteractive`, the default answer about the
      ESP seems to be "yes, install it", and the log message
      "Installing rEFInd to the ESP..." unfortunately doesn't clarify whether
      that means to also make it the default. Which is a bit scary because in
      interactive mode, the question included whether to adjust NVRAM entries.
      For safe auto-install, the deb package seems to not be the way to go.
      */
  ]);
};
