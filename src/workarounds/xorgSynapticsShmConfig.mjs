// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('xorgConfigDropFile', {
    path: '20-synaptics-enable-shmconfig',
    section: [
      'InputClass',
      'Identifier "Enable Synaptics SHMConfig',
      'MatchIsTouchpad "on"',
      'MatchDevicePath "/dev/input/event*"',
      'Option "SHMConfig" "on"',
    ],
  });
};
