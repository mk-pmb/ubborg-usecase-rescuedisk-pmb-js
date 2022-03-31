// -*- coding: utf-8, tab-width: 2 -*-

// S.M.A.R.T. = Self-Monitoring, Analysis and Reporting Technology
//    = disk health self-assessment

export default async (bun) => {
  bun.needs('debPkg', [
    'smartmontools',
    'nullmailer',   // because smartmontools needs a MTA
  ]);
};
