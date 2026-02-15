// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'gkbd-capplet => cmd:gkbd-keyboard-display', // visual kbd layout viewer


    // Screen metadata detectors:
    'ddcutil => cmd:',
    'edid-decode => cmd:',
    'read-edid => cmd:get-edid',
  ]);
};
