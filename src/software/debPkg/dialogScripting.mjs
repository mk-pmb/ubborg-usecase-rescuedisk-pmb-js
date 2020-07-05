// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'gxmessage',
    'x11-utils',  // xmessage
    'zenity',
    'yad',        // a better zenity
    'alltray',
  ]);
};
