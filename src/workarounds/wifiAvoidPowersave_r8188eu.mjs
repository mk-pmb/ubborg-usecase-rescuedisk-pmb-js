// -*- coding: utf-8, tab-width: 2 -*-

import fileGeneratedHint from '../fileGeneratedHint';

export default async(bun) => {
  // see also: ../software/debPkg/netMgr.mjs
  bun.needs('admFile', {
    path: '/etc/modprobe.d/wifi-avoid-powersave-r8188eu.conf',
    mimeType: 'lines',
    content: [
      fileGeneratedHint('# ', '\n'),
      'options 8188eu rtw_power_mgnt=0 rtw_enusbss=0',
    ],
  });
};
