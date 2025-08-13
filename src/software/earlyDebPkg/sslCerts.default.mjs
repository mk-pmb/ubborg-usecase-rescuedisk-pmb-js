// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'ca-certificates', // required to install from many https:// apt repos.
  ]);
};
