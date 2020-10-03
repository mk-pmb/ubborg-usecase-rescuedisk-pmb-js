// -*- coding: utf-8, tab-width: 2 -*-

import fileGeneratedHint from '../fileGeneratedHint';

export default async(bun) => {
  bun.needs('admFile', {
    pathPre: '/usr/share/X11/xorg.conf.d/',
    path: '20-workaround-focal-xkb-use-evdev-rules.conf',
    mimeType: 'lines',
    content: [
      fileGeneratedHint('# ', '\n'),
      'Section "InputClass"',
      '  Identifier "Enable evdev rules even on Ubuntu focal"',
      '  MatchIsKeyboard "yes"',
      '  MatchDevicePath "/dev/input/event*"',
      '  Option "XkbRules" "evdev"',
      'EndSection',
    ],
  });
};
