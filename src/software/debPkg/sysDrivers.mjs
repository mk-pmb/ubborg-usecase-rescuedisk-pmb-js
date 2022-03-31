// -*- coding: utf-8, tab-width: 2 -*-

// see also: ../nonDebDrivers/

export default async (bun) => {
  bun.needs('debPkg', [
    'ubuntu-drivers-common',  // ubuntu-drivers autoinstall
    // 'fwupd', // Automatic firmware update, but implemented as daemon. :-(

    'linux-firmware',
    'thermald',
  ]);
};
