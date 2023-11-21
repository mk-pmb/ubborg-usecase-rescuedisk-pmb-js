// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'apache2-utils => cmd:htpasswd',
    'ent',
    'haveged',    // waste less time waiting for randomness pool affusion
    'libcrypt-ssleay-perl',
    'libnet-ssleay-perl',
  ]);
};
