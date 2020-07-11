// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'colordiff',

    // ¬focal 'diffuse',
    'meld',
  ]);
};
