// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  // https://wiki.ubuntu.com/ClipboardPersistence

  bun.needs('debPkg', [
    'parcellite',
    // ^-- Helps close GTK apps faster, see
    // https://bugs.launchpad.net/ubuntu/+source/mousepad/+bug/531704/comments/8
  ]);

  bun.needs('debPkgConflict', [
    // Declare incompatibilities:
    'unity-services',
  ]);
};
