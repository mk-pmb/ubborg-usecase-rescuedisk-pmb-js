// -*- coding: utf-8, tab-width: 2 -*-

import fileGeneratedHint from '../fileGeneratedHint';


const powerMgtOpt = 'rtw_power_mgnt';
// ^-- Spelling mg[mn]t? -->
//     grep -aboPe rtw_power_mg.t -m 1 -r /lib/modules/*.*-*/kernel/drivers


export default async(bun) => {
  // see also: ../software/debPkg/netMgr.mjs
  bun.needs('admFile', {
    path: `/etc/modprobe.d/wifi-avoid-powersave-urd.conf`,
    mimeType: 'lines',
    content: [
      fileGeneratedHint('# ', '\n'),
      ...[
        '8188eu',
        '8723bs',
      ].map(chipset => `options ${chipset} ${powerMgtOpt}=0 rtw_enusbss=0`),
    ],
  });
};
