// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'gkbd-capplet => cmd:gkbd-keyboard-display', // visual kbd layout viewer
  ]);
};
