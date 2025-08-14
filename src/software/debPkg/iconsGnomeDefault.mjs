// -*- coding: utf-8, tab-width: 2 -*-

import osVerInfo from 'ubborg-sysfacts-helper-pmb/util/osVersionInfo.mjs';

export default async (bun) => {
  const { verNumYear } = await osVerInfo(bun);
  bun.needs('debPkg', [
    'gnome-icon-theme',
    'gnome-icon-theme-suede',

    // 'gnome-icon-theme-symbolic',
    // focal apt: Note, selecting 'adwaita-icon-theme-full'
    //            instead of 'gnome-icon-theme-symbolic'
    ((verNumYear <= 22) && 'adwaita-icon-theme-full'),
  ].filter(Boolean));
};
