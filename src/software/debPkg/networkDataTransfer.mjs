// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'axel',   // parallel wget
    'curl',
    'netcat',
    'socat',
    'wget',
  ]);
};
