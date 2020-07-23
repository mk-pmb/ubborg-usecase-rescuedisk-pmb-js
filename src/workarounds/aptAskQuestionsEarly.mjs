// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('admFile', {
    path: '/etc/apt/apt.conf.d/40interview-first',
    mimeType: 'utf8_tw; 2; #',
    content: [
      '',
      '# Make apt/dpkg try to ask all config questions up front,',
      '# so that once the update starts, it _should_ be able to',
      '# finish without any further interaction.',
      '',
      'DPkg::Pre-Install-Pkgs {',
      '  "dpkg-preconfigure --apt --priority=high";',
      '};',
    ],
  });
};
