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
    'xvfb', // headless X server
    'xserver-xorg',
    'libxcb-xtest0',

    'numlockx',
    'xclip',
    'xdg-utils',
    'xsel',
    'xterm',

    'x11-apps', // oclock, xcalc, xeyes, xmag

    'scrot',
    'wmctrl',

    'xli',  // load images into an X11 window or onto the root window
    'gsetroot', // wallpaper configurator
    'hsetroot', // wallpaper configurator

    'suckless-tools => cmd:ssid',
    // ^-- suckless-tools: "simple commands for minimalistic window managers"
  ]);

  bun.needs('admFile', {
    path: '/var/lib/AccountsService/users/',
    // default for admFile: enforcedModes: 'a-x,a=rX,ug+w'
    // setting a non-default "enforcedModes" caused a conflict @ 2022-01-08.
  });
};
