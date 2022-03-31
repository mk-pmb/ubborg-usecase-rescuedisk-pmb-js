// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'git',
    'git-annex',
    'git-cola',
  ]);
};
