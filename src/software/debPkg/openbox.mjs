// -*- coding: utf-8, tab-width: 2 -*-

import sysFactsHelper from 'ubborg-sysfacts-helper-pmb';

export default async (bun) => {
  const osCn = (await sysFactsHelper.mtd(bun, 'osVersion')()).codename;
  bun.needs('debPkg', [
    'openbox',
    'obconf',

    // required for openbox *.desktop autostart:
    ((osCn !== 'jammy') && 'python-xdg'),
    'python3-xdg',

    // A launch bar, b/c openbox doesn't have desktop icons:
    'wbar',
    ((osCn !== 'jammy') && 'wbar-config'),
    // Some PNG icons for wbar:
    'gnome-accessibility-themes => file:/usr/share/icons/HighContrast/32x32/',

    // some basic monitoring:
    'wmbattery',
    'wmbubble',
  ].filter(Boolean));
};
