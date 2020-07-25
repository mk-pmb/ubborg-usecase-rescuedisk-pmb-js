// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'man-db',   // focal apt: Note, selecting 'man-db' instead of 'man'
  ]);
};
