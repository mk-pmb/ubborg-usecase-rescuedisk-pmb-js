// -*- coding: utf-8, tab-width: 2 -*-

import sysFactsHelper from 'ubborg-sysfacts-helper-pmb';

export default async (bun) => {
  const osVer = await sysFactsHelper.mtd(bun, 'osVersion')();
  const cn = (osVer || false).codename;
  if (!cn) { return; }
  await bun.needs('bundle', cn + '/');
};
