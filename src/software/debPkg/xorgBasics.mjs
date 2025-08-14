// -*- coding: utf-8, tab-width: 2 -*-

import osVerInfo from 'ubborg-sysfacts-helper-pmb/util/osVersionInfo.mjs';

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

export default async (bun) => {
  const { verNumYear } = await osVerInfo(bun);
  bun.needs('debPkg', [
    ...xGreeters,
    ...xinputDevices,

    'x11-xserver-utils => cmd:xsetroot',
    // would install python3-apport // 'xdiagnose',
    'xdotool => cmd:',
    'xinput => cmd:',
    'xvfb => cmd:', // headless X server
    'xserver-xorg',
    'libxcb-xtest0',

    'numlockx => cmd:',
    'xclip => cmd:',
    'xdg-utils',
    'xsel => cmd:',
    'xterm => cmd:',

    'x11-apps => cmd:oclock', // also provides xcalc, xeyes, xmag

    'xprintidle => cmd:',

    'scrot => cmd:',
    'wmctrl => cmd:',

    'libnotify-bin => cmd:notify-send',

    'xli => cmd:',  // load images into an X11 window or onto the root window
    ((verNumYear <= 22) && 'gsetroot => cmd:'), // wallpaper configurator
    'hsetroot => cmd:', // wallpaper configurator

    'extra-xdg-menus',  // for more icons

    'suckless-tools => cmd:ssid',
    // ^-- suckless-tools: "simple commands for minimalistic window managers"
  ].filter(Boolean));

  bun.needs('admFile', {
    path: '/var/lib/AccountsService/users/',
    // default for admFile: enforcedModes: 'a-x,a=rX,ug+w'
    // setting a non-default "enforcedModes" caused a conflict @ 2022-01-08.
  });
};
