// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'gddrescue',    // regular CLI ddrescue. g is for GNU, not GUI.
    'testdisk',     // includes PhotoRec, the multimedia file carver.
  ]);
};
