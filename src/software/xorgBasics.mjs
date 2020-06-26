// -*- coding: utf-8, tab-width: 2 -*-

const xGreeters = [
  // @2018-12-12 failed to autologin // 'lightdm-autologin-greeter',
  // @2018-12-12 failed to autologin // 'lightdm-gtk-greeter',
  'unity-greeter',
];

export default async(bun) => {
  bun.needs('debPkg', [
    ...xGreeters,

    'x11-xserver-utils',    // provides xsetroot
    'xdotool',
    'xserver-xorg',

    'xsel',

    'scrot',
    'wmctrl',
  ]);
};
