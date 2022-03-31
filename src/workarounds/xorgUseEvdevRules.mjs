// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('xorgConfigDropFile', {
    path: '20-workaround-focal-xkb-use-evdev-rules',
    section: [
      'InputClass',
      'Identifier "Enable evdev rules even on Ubuntu focal"',
      'MatchIsKeyboard "yes"',
      'MatchDevicePath "/dev/input/event*"',
      'Option "XkbRules" "evdev"',
    ],
  });
};
