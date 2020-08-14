// -*- coding: utf-8, tab-width: 2 -*-

const xGreeters = [
  // @2018-12-12 failed to autologin // 'lightdm-autologin-greeter',
  // @2018-12-12 failed to autologin // 'lightdm-gtk-greeter',
  'unity-greeter',
];

const xinputDevices = [
  'xserver-xorg-input-all',
  // ^-- But in focal it seems to be missing some crucial dependencies, so…

  'xserver-xorg-input-evdev',
  'xserver-xorg-input-joystick',
  // virtual package in focal // 'xserver-xorg-input-keyboard',
  'xserver-xorg-input-mouse',
  'xserver-xorg-input-wacom',
];

export default async(bun) => {
  bun.needs('debPkg', [
    ...xGreeters,
    ...xinputDevices,

    'x11-xserver-utils',    // provides xsetroot
    'xdiagnose',
    'xdotool',
    'xinput',
    'xserver-xorg',

    'xdg-utils',
    'xsel',
    'xterm',

    'scrot',
    'wmctrl',
  ]);
};
