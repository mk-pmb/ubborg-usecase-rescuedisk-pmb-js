// -*- coding: utf-8, tab-width: 2 -*-

import osVerInfo from 'ubborg-sysfacts-helper-pmb/util/osVersionInfo.mjs';

export default async (bun) => {
  const { verNumYear } = await osVerInfo(bun);
  bun.needs('debPkg', [
    'openbox',
    'obconf',

    // required for openbox *.desktop autostart:
    ((verNumYear <= 22) && 'python-xdg'),
    'python3-xdg',

    // A launch bar, b/c openbox doesn't have desktop icons:
    'wbar',
    ((verNumYear <= 22) && 'wbar-config'),
    // Some PNG icons for wbar:
    'gnome-accessibility-themes => file:/usr/share/icons/HighContrast/32x32/',

    // some basic monitoring:
    'wmbattery',
    'wmbubble',
  ].filter(Boolean));
};
