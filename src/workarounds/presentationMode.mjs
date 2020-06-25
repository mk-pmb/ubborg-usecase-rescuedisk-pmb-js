// -*- coding: utf-8, tab-width: 2 -*-

import fileGeneratedHint from '../fileGeneratedHint';

export default async(bun) => {
  const owner = bun.getParams().loginName;
  const fileDf = {
    enforcedOwner: owner,
    enforcedGroup: owner,
    enforcedModes: 'a=r,ug+w',
    mimeType: 'text/plain',
    replace: true,
  };

  await bun.needs('file', {
    ...fileDf,
    path: '~/.xscreensaver',
    content: [
      fileGeneratedHint('# '),
      'mode: off',
      'lock: False',
      '',
    ].join('\n'),
  });

  await bun.needs('admFile', {
    path: '/etc/systemd/logind.conf.d/insomnia.conf',
    mimeType: 'static_ini',
    content: {
      // https://www.freedesktop.org/software/systemd/man/logind.conf.html
      Login: {
        HandlePowerKey: 'ignore', // i.e. press 4 sec if you really mean it.
        HandleSuspendKey: 'ignore',
        HandleHibernateKey: 'ignore',
        HandleLidSwitch: 'ignore',
        HandleLidSwitchExternalPower: 'ignore',
        HandleLidSwitchDocked: 'ignore',
        PowerKeyIgnoreInhibited: 'no',
        SuspendKeyIgnoreInhibited: 'no',
        HibernateKeyIgnoreInhibited: 'no',
        LidSwitchIgnoreInhibited: 'no',
      },
    }
  });

};
