// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'build-essential',
    'gdb',
    'manpages-dev', // man pages for C stdlib functions
    'manpages', // basics about GNU/Linux, e.g. devices, /etc/passwd, wtmp

    'geany => cmd:',  // Text editor that can fold JSON containers
    'gucharmap => cmd:',  // View Unicode blocks, e.g. for RegExp ranges.
  ]);
};
