// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'iputils-ping => cmd:ping',
    'netcat => cmd:',
  ]);
};
