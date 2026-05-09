// -*- coding: utf-8, tab-width: 2 -*-

import fileGeneratedHint from '../fileGeneratedHint.mjs';


const powerMgtOpt = 'rtw_power_mgnt';
// ^-- Spelling mg[mn]t? -->
//     grep -aboPe rtw_power_mg.t -m 1 -r /lib/modules/*.*-*/kernel/drivers


export default async (bun) => {
  // see also: ../software/debPkg/netMgr.mjs

  const ruleNameSlug = 'wifi-avoid-powersave-urd';
  const modprobeRuleFile = '/etc/modprobe.d/' + ruleNameSlug + '.conf';
  const udevRuleFile = '/etc/udev/rules.d/60-' + ruleNameSlug + '.rules';
  const maybeRedundant = '# This rule might be redundant with ';

  bun.needs('admFile', {
    path: modprobeRuleFile,
    mimeType: 'lines',
    content: [
      fileGeneratedHint('# ', '\n'),
      maybeRedundant + udevRuleFile,
      ...[
        '8188eu',
        '8723bs',
      ].map(chipset => `options ${chipset} ${powerMgtOpt}=0 rtw_enusbss=0`),
    ],
  });

  bun.needs('admFile', {
    path: udevRuleFile,
    mimeType: 'lines',
    content: [
      fileGeneratedHint('# ', '\n'),
      '# Device class 0xE0 = Wireless Controller (wifi, bluetooth, …)',
      maybeRedundant + modprobeRuleFile,
      'ACTION=="add", SUBSYSTEM=="usb", ATTR{bDeviceClass}=="e0", \\',
      '  TEST=="power/control", ATTR{power/control}="on"',
    ],
  });
};
