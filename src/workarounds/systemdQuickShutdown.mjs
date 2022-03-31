// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('admFile', {
    path: '/etc/systemd/system.conf.d/quick_shutdown.conf',
    mimeType: 'static_ini',
    content: {
      // https://www.freedesktop.org/software/systemd/man/systemd-system.conf.html
      Manager: {
        DefaultTimeoutStopSec: 30,
      },
    },
  });
};
