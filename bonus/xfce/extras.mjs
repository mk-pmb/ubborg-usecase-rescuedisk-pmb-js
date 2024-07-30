// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'xfce4-clipman-plugin',
    'xfce4-clipman',
    'xfce4-goodies',
  ]);
};
