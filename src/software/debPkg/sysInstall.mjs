// -*- coding: utf-8, tab-width: 2 -*-

import osVerInfo from 'ubborg-sysfacts-helper-pmb/util/osVersionInfo.mjs';

export default async (bun) => {
  const { verNumYear, release } = await osVerInfo(bun);
  bun.needs('debPkg', [
    ((verNumYear <= 22) && 'kpatch'),
    'linux-image-lowlatency-hwe-' + release + '-edge',
    'multistrap',
  ].filter(Boolean));
};
