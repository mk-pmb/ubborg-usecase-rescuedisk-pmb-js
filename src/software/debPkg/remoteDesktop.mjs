// -*- coding: utf-8, tab-width: 2 -*-

import sysFactsHelper from 'ubborg-sysfacts-helper-pmb';

export default async (bun) => {
  const osCn = (await sysFactsHelper.mtd(bun, 'osVersion')()).codename;

  const remminaPlugins = [
    ((osCn !== 'jammy') && 'nx'),
    'rdp',
    'secret',
    'spice',
    'vnc',
    'www',
    ((osCn !== 'jammy') && 'xdmcp'),
  ].filter(Boolean).map(n => 'remmina-plugin-' + n);

  bun.needs('debPkg', [
    'x11vnc',

    'remmina',
    ...remminaPlugins,
  ].filter(Boolean));
};
