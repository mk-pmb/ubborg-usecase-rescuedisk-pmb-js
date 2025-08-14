// -*- coding: utf-8, tab-width: 2 -*-

import osVerInfo from 'ubborg-sysfacts-helper-pmb/util/osVersionInfo.mjs';

export default async (bun) => {
  const { verNumYear } = await osVerInfo(bun);
  bun.needs('debPkg', [
    ((verNumYear <= 22) && 'libgl1-mesa-glx'),

    ((verNumYear <= 22) && 'libegl1-mesa'),
  ].filter(Boolean));
};
