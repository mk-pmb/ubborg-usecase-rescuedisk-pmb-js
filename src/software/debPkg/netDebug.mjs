// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'arping',
    'bind9-dnsutils => dig',
    'iputils-ping => cmd:ping',
    'netsed',
  ]);
};
