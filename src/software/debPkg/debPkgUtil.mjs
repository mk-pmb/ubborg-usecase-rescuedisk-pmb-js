// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'apt',
    'aptitude',
    'extrepo',    // enabler for curated community-run APT repos.
  ]);
};
