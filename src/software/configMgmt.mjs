// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('bundle', [
  ]);
  bun.needs('debPkg', [
    'crudini',
    'ansible',
  ]);
};
