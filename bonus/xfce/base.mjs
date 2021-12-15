// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'notify-osd¬',
    'xfce4-battery-plugin',
    'xfce4-notifyd',
    'xfce4-power-manager-plugins',
    'xfce4-power-manager',
    'xfce4',
  ]);
};
