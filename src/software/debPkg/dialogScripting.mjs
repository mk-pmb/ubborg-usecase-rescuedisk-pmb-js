// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'alltray',
    'gxmessage',
    'x11-utils',  // xmessage
    'yad',        // a better zenity
    'zenity',
  ]);
};
