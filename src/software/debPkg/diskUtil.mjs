// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'f3', // Test flash memory devices ("Fight Flash Fraud"/"Fight Fake Flash")
  ]);
};
