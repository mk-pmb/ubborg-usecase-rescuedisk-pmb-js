// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'xserver-xorg-input-synaptics',
  ]);
  bun.needs('xdgAutostarter', {
    bfn: 'touchpad-config-synclient',
    title: 'Touchpad Config via synclient',
    descr: 'Use touchpad only to move the mouse, click only with buttons.',
    icon: 'input-touchpad',
    exec: ['/usr/bin/synclient',
      'MaxTapTime=0',
      'MaxDoubleTapTime=0',
      'VertEdgeScroll=0',
    ].join(' '),
    owner: bun.getParams().loginName,
  });
};
