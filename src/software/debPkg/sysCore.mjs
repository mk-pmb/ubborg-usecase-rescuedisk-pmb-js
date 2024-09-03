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
    'anacron => cmd:',
    'console-data',
    'cron => cmd:crontab',
    // deprecated as of Ubuntu 18.04 // 'gksu => cmd:gksudo',
    'cgroup-tools => cmd:cgexec',
    'cpulimit => cmd:',
    'initramfs-tools => cmd:mkinitramfs',
    'keyboard-configuration',
    'logrotate => cmd:',
    'perl => cmd:',
    'python3-evdev',
    'python3-libevdev',
    'python3-pyinotify',
    's6', // successor of daemontools, cousin to runit.
    'systemd => cmd:',
  ]);

  bun.needs('admSymLink', {
    path: '/etc/systemd/system/ureadahead.service',
    content: '/dev/null',
    // Don't copy secrets onto other partitions.
    // Keeping ureadahead installed b/c it's part of ubuntu-minimal and
    // would thus cause package flickering with abstract config managers.
  });

  bun.needs('admSymLink', [
    '/etc/machine-id.@dbus =-> /var/lib/dbus/machine-id',
  ]);
};
