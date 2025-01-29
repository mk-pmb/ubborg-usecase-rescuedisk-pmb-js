// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'pigz',   // Parallel Implementation of GZip, using multiple CPU cores
  ]);
};
