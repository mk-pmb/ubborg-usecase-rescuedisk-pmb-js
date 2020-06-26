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

export default async(bun) => {
  bun.needs('debPkg', [
    ...ubuMin,
    'anacron',
    'console-data',
    'initramfs-tools',
    'keyboard-configuration',
    'logrotate',
    'perl',
    'systemd',
  ]);
};
