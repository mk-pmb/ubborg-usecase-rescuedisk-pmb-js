// -*- coding: utf-8, tab-width: 2 -*-

import fileGeneratedHint from '../fileGeneratedHint';

export default async(bun) => {
  const owner = bun.getParams().loginName;

  await bun.needs('xdgAutostarter', {
    bfn: 'update-notifier',
    exec: false,
    owner,
  });

  function aptCfg(name, lines) {
    return bun.needs('admFile', {
      path: '/etc/apt/apt.conf.d/' + name,
      mimeType: 'text/plain',
      replace: true,
      content: [fileGeneratedHint('# ', '\n'), ...lines],
    });
  };
  await aptCfg('95never-install-recommends', [
    'APT::Install-Recommends "0";\n',
    'APT::Install-Suggests "0";\n',
  ]);
  await aptCfg('95no-periodic-interference', [
    // Because it usually blocks the apt database at exactly the moment
    // you want to install something.
    'APT::Periodic::Enable "0";\n',
  ]);
};
