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

    // Let's give thise another chance in focal,
    // because they're required by xfce4-goodies:
    // 'xfce4-clipman-plugin',
    // 'xfce4-clipman',
  ]);
};
