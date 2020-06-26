// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'openssh-server',
    'haveged',    // waste less time waiting for randomness pool affusion
  ]);
};
