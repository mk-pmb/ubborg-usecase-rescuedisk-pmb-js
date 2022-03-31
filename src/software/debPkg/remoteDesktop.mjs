// -*- coding: utf-8, tab-width: 2 -*-

const remminaPlugins = [
  'nx',
  'rdp',
  'secret',
  'spice',
  'vnc',
  'www',
  'xdmcp',
].map(n => 'remmina-plugin-' + n);

export default async (bun) => {
  bun.needs('debPkg', [
    'x11vnc',

    'remmina',
    ...remminaPlugins,
  ]);
};
