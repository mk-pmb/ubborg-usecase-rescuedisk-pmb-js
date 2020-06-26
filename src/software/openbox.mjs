// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'openbox',
    'obconf',

    // required for openbox *.desktop autostart:
    'python-xdg',

    // A launch bar, b/c openbox doesn't have desktop icons:
    'wbar',
    'wbar-config',
    // Some PNG icons for wbar:
    'gnome-accessibility-themes => file:/usr/share/icons/HighContrast/32x32/',

    // some basic monitoring:
    'wmbattery',
    'wmbubble',
  ]);
};
