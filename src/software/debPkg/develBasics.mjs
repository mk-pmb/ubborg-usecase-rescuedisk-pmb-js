// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'build-essential',

    'geany',    // Text editor that can fold JSON containers
  ]);
};
