// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'arping',
    'bind9-dnsutils => cmd:dig',
    'iputils-ping => cmd:ping',
    'libmime-encwords-perl',
    'netsed',
  ]);
};
