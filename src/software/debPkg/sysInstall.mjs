// -*- coding: utf-8, tab-width: 2 -*-

import sysFactsHelper from 'ubborg-sysfacts-helper-pmb';
import ubuntuVersionsTable from 'ubuntu-versions-table-pmb';


export default async (bun) => {
  const osCn = (await sysFactsHelper.mtd(bun, 'osVersion')()).codename;
  const osRel = ubuntuVersionsTable.byCodename(osCn).release;

  bun.needs('debPkg', [
    'kpatch',
    'linux-image-lowlatency-hwe-' + osRel + '-edge',
    'multistrap',
  ]);
};
