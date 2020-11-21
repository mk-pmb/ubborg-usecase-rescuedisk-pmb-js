// -*- coding: utf-8, tab-width: 2 -*-

import sysFactsHelper from 'ubborg-sysfacts-helper-pmb';


export default async(bun) => {
  await sysFactsHelper(bun, {
    osVersion: {
      family: 'linux',
      distro: 'ubuntu',
      codename: 'focal',
    },
  });

  const components = [
    'main',
    'restricted',
    'universe',
    'multiverse',
  ];

  function ubuRepo(name, subdomain, distSuffixes) {
    return bun.needs('debPkgRepo', {
      name: 'ubuntu_' + name,
      debUrls: [`http://${subdomain || name}.ubuntu.com/ubuntu`],
      dists: (distSuffixes || [name]).map(
        s => ('%{codename}' + (s && '-') + s)),
      keyUrls: null,
      components,
    });
  }

  ubuRepo('security');
  ubuRepo('base', 'de.archive', [
    '',
    'backports',
    'updates',
    'proposed',
  ]);
};
