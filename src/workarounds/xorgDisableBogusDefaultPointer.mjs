// -*- coding: utf-8, tab-width: 2 -*-

import fileGeneratedHint from '../fileGeneratedHint';

export default async(bun) => {
  bun.needs('admFile', {
    pathPre: '/usr/share/X11/xorg.conf.d/',
    path: '20-workaround-focal-ignore-default-pointer.conf',
    mimeType: 'lines',
    content: [
      fileGeneratedHint('# ', '\n'),
      'Section "InputClass"',
      '  Identifier "Annoying doppelganger of real, more specific touchpads"',
      '  MatchProduct "<default pointer>"',
      '  # MatchIsPointer "yes"',
      '  # MatchIsTouchoad "yes"',
      '  Option "Ignore" "yes"',
      'EndSection',
    ],
  });
};
