// -*- coding: utf-8, tab-width: 2 -*-

import sysdWants from 'ubborg-sysd-wants';

const mods = [
  'ax88179_178a',
];

export default async (bun) => {
  const svcUnitSpec = {
    mimeType: 'static_ini; speq',
    pathPre: '/lib/systemd/system/',
    path: 'ubborg-rescuedisk-late-modprobes',
    pathSuf: '.service',
    content: {
      Service: {
        SyslogIdentifier: '%N',
        WorkingDirectory: '/',
        Type: 'oneshot',
        ExecStart: mods.map(m => 'modprobe ' + m),
      },
    },
  };
  await bun.needs('admFile', [
    svcUnitSpec,
    sysdWants('sysinit.target', true, svcUnitSpec),
  ]);
};
