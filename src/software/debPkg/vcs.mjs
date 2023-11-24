// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'git => cmd:',
    'git-annex => cmd:',
    'git-cola => cmd:',
    'git-email => file:///usr/lib/git-core/git-send-email',
  ]);
};
