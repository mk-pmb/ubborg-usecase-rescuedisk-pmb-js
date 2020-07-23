// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('admFile', {
    path: '/etc/apt/apt.conf.d/40impatient-http',
    mimeType: 'utf8_tw; 2; #',
    content: [
      '',
      '# Waste less time on dead mirror servers.',
      '',
      'Acquire::http::Retries "1";',
      'Acquire::http::timeout "10";',
    ],
  });
};
