// -*- coding: utf-8, tab-width: 2 -*-

const ubuMin = [
  'ubuntu-minimal',

  // includes by dependency:
  // 'console-setup',
  // 'kbd',
  // 'python3',
  // 'rsyslog',
  // 'sudo',
  // 'tzdata',
];

export default async (bun) => {
  bun.needs('debPkg', [
    ...ubuMin,
    'anacron',
    'console-data',
    'cron => cmd:crontab',
    // deprecated as of Ubuntu 18.04 // 'gksu => cmd:gksudo',
    'initramfs-tools',
    'keyboard-configuration',
    'logrotate',
    'perl',
    'systemd',
  ]);

  bun.needs('admSymLink', {
    path: '/etc/systemd/system/ureadahead.service',
    content: '/dev/null',
    // Don't copy secrets onto other partitions.
    // Keeping ureadahead installed b/c it's part of ubuntu-minimal and
    // would thus cause package flickering with abstract config managers.
  });
};
