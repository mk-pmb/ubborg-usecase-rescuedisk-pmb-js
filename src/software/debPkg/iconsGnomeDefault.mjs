// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'gnome-icon-theme',
    'gnome-icon-theme-suede',

    // 'gnome-icon-theme-symbolic',
    // focal apt: Note, selecting 'adwaita-icon-theme-full'
    //            instead of 'gnome-icon-theme-symbolic'
    'adwaita-icon-theme-full',
  ]);
};
