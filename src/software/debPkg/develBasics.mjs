// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'build-essential',

    'geany => cmd:',  // Text editor that can fold JSON containers
    'gucharmap => cmd:',  // View Unicode blocks, e.g. for RegExp ranges.
  ]);
};
