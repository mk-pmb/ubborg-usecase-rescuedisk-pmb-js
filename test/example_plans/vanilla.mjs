// -*- coding: utf-8, tab-width: 2 -*-

import sysFactsHelper from 'ubborg-sysfacts-helper-pmb';

import hostFacts from './inc/vanilla.hostFacts.mjs';

export default async (bun) => {
  await sysFactsHelper(bun, hostFacts, true);
  bun.needs('bundle', 'cjs:ubborg-usecase-rescuedisk-pmb');
};
