// -*- coding: utf-8, tab-width: 2 -*-

const ConditionACPower = '';
// ^-- ATTN: Empty = ignore; false/no would mean start only if on

export default async(bun) => {
  bun.needs('admFile', {
    path: '/etc/systemd/system/anacron.service.d/on-ac.conf',
    mimeType: 'static_ini',
    content: { Unit: { ConditionACPower } },
  });

  /*
    There's also ANACRON_RUN_ON_BATTERY_POWER=no in /etc/default/anacron,
    but that one is only relevant for /etc/init.d/anacron start.
    The init.d shell script uses it to decide whether to start the daemon.
    Once the daemon is running, it no longer cares about power supply.
    Modern Ubuntu uses systemd to start the daemon, so we can safely ignore
    the init.d file and its config in /etc/default.
  */
};
