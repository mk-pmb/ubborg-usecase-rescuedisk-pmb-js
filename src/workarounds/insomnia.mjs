// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('admFile', {
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
    },
  });
};
