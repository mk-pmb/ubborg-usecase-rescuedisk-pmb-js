// -*- coding: utf-8, tab-width: 2 -*-

import osVerInfo from 'ubborg-sysfacts-helper-pmb/util/osVersionInfo.mjs';

export default async (bun) => {
  const { verNumYear } = await osVerInfo(bun);

  const remminaPlugins = [
    ((verNumYear <= 20) && 'nx'),
    'rdp',
    'secret',
    'spice',
    'vnc',
    'www',
    ((verNumYear <= 20) && 'xdmcp'),
  ].filter(Boolean).map(n => 'remmina-plugin-' + n);

  bun.needs('debPkg', [
    'x11vnc',

    'remmina',
    ...remminaPlugins,
  ].filter(Boolean));
};
