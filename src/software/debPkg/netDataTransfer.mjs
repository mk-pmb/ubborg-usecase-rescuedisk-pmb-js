// -*- coding: utf-8, tab-width: 2 -*-

import osVerInfo from 'ubborg-sysfacts-helper-pmb/util/osVersionInfo.mjs';

export default async (bun) => {
  const { verNumYear } = await osVerInfo(bun);
  bun.needs('debPkg', [
    'axel',   // parallel wget
    'curl',
    'ncat',   // supports --sh-exec, --chat, --max-conns. not "nchat".
    ((verNumYear <= 22) && 'netcat'),
    'socat',
    'sshfs',
    ((verNumYear <= 22) && 'tftp'),
    'wget',

    'corkscrew',    // Tunnel TCP connections through HTTP proxies
    'proxytunnel',  // tunnel a connection through a standard HTTPS proxy
  ].filter(Boolean));
};
