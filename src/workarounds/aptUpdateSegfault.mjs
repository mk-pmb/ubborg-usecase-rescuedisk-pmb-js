// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('admFile', {
    path: '/etc/apt/apt.conf.d/90cache-limit-avoid-segfault',
    mimeType: 'utf8_tw; 2; #',
    content: [
      '',
      "# increase apt's cache limit to avoid \"apt-get update\" segfaulting",
      '# while reading package lists.',
      '# see LANG=C man 5 apt.conf | grep Cache-Start, -A 15',
      '',
      '# unit = bytes.    ,m¦   ,k¦   ,b¦',
      'APT::Cache-Start  32 ¦ 000 ¦ 000 ¦;',
      'APT::Cache-Grow    2 ¦ 000 ¦ 000 ¦;',
      'APT::Cache-Limit 128 ¦ 000 ¦ 000 ¦;',
    ].map(ln => ln.replace(/ ?¦ {0,2}/g, '')),
  });
};
