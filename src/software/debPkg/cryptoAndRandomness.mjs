// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('debPkg', [
    'dmsetup',    // no longer a default in Ubuntu Xenial
    'ent',
    'haveged',    // waste less time waiting for randomness pool affusion
    'libcrypt-ssleay-perl',
    'libnet-ssleay-perl',
  ]);
};
