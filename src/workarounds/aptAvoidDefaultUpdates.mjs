// -*- coding: utf-8, tab-width: 2 -*-

import fileGeneratedHint from '../fileGeneratedHint';

export default async(bun) => {
  bun.needs('xdgAutostarter', { bfn: 'update-notifier', exec: false });

  function aptCfg(name, lines) {
    return bun.needs('admFile', {
      path: '/etc/apt/apt.conf.d/' + name,
      mimeType: 'text/plain',
      replace: true,
      content: [fileGeneratedHint('# ', '\n'), ...lines],
    });
  };
  aptCfg('95never-install-recommends', [
    'APT::Install-Recommends "0";\n',
    'APT::Install-Suggests "0";\n',
  ]);
  aptCfg('95no-periodic-interference', [
    'APT::Periodic::Enable "0";\n',
    '# Because it usually blocks the apt database at exactly',
    '# the moment you want to install something.',
  ]);
};
