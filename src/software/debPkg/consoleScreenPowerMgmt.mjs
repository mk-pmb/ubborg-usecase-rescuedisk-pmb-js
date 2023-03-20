// -*- coding: utf-8, tab-width: 2 -*-

const setTermScriptLines = [
  '[ "$TERM" = linux ] || return 0',
  '# Single dash arguments to setterm are for Ubuntu trusty compat.',
  '# Ubuntu focal uses double dash arguments but still supports single.',
  '',
  '# Blank terminal after this many minutes of inactivity (0 = disable):',
  'setterm -blank 5',
  '',
  '# Set display to VESA power saving mode…',
  'setterm -powersave powerdown',
  '# … after this many minutes of being blanked (0 = disable):',
  'setterm -powerdown 5',
];


export default async (bun) => {
  bun.needs('debPkg', [
    'util-linux',
    // I'd prefer to command-detect it via ' => cmd:setterm',
    // but ./diskPartMgmt already detects it via sfdisk.
  ]);
  bun.needs('admFile', [
    { path: '/etc/profile.d/power_mgmt.console_screen.urd.sh',
      mimeType: 'utf8_tw; 2; #',
      content: setTermScriptLines,
    },
  ]);
};
