// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'gnome-icon-theme',
    'gnome-icon-theme-symbolic',
    'gnome-icon-theme-suede',
    'adwaita-icon-theme-full',
  ]);
};
