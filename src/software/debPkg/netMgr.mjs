// -*- coding: utf-8, tab-width: 2 -*-
/*

Known problems with NetworkManager:

* In xenial, it forces all wifi antennae to be either all on or all off.
  In focal, when one antenna is soft-blocked, at least NM no longer soft-blocks
  all the others, but it still insists on "nmcli radio wifi" being "disabled",
  so it will refuse to manage any of the remaining enabled antennae.
  Bug ticket (pretty dead atm):
  https://gitlab.freedesktop.org/NetworkManager/NetworkManager/-/issues/76


*/

export default async (bun) => {
  bun.needs('debPkg', [
    'network-manager',
  ]);

  bun.needs('admFile', {
    path: '/etc/NetworkManager/conf.d/override-wifi-powersave.conf',
    // see also: ../../workarounds/wifiAvoidPowersave_*
    mimeType: 'lines',
    content: [
      '[connection]',
      'wifi.powersave = 2',
      '# 2 = disabled; for other values: man nm-settings',
      '# Check with: sudo iw dev wlp2s0 get power_save',
    ],
  });
};
