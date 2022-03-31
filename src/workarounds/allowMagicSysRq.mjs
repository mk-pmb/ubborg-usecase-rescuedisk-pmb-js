// -*- coding: utf-8, tab-width: 2 -*-

const content = [
  '#',
  '# Security concerns described here:',
  '# https://bugs.launchpad.net/ubuntu/+source/linux/+bug/194676',
  '# However, session-killing and OOM kill can be really handy at times.',
  '#',
  '# German keyboards: https://de.wikipedia.org/wiki/Magische_S-Abf-Taste',
  '# "Auf Tastaturen für Deutschland drückt man […] Alt + Druck + Taste […]"',
  '',
  'kernel.sysrq = 1',
];

export default async (bun) => {
  bun.needs('admFile', {
    path: '/etc/sysctl.d/90-allow-magic-sysrq.conf',
    mimeType: 'utf8_tw; 2; #',
    content,
  });
};
