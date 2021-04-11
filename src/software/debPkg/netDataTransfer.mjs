// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'axel',   // parallel wget
    'curl',
    'netcat',
    'socat',
    'sshfs',
    'tftp',
    'wget',

    'corkscrew',    // Tunnel TCP connections through HTTP proxies
    'proxytunnel',  // tunnel a connection through a standard HTTPS proxy
  ]);
};
