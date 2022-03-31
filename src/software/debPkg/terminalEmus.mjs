// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'sakura',

    'gnome-terminal',
    'dconf-cli',  // for taming GT on startup.
  ]);
};
