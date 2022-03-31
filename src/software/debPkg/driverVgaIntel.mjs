// -*- coding: utf-8, tab-width: 2 -*-

const installProprietaryShaders = true;

export default async (bun) => {
  bun.needs('debPkg', [
    'vainfo',
    'i965-va-driver' + (installProprietaryShaders ? '-shaders' : ''),
  ]);
};
