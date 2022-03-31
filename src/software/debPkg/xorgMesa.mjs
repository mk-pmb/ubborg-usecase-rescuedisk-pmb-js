// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'libgl1-mesa-glx',

    'libegl1-mesa',
  ]);
};
