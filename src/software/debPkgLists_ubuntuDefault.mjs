// -*- coding: utf-8, tab-width: 2 -*-

import mustBe from 'typechecks-pmb/must-be';

export default async(bun) => {
  const osVer = bun.makeParamPopper().mustBe('dictObj', 'osVersion');
  const dist = mustBe.nest('Ubuntu version codename', osVer.codename);
  const components = [
    'main',
    'restricted',
    'universe',
    'multiverse',
  ];

  function ubuRepo(name, subdomain, distSuffixes) {
    return bun.needs('debPkgRepo', {
      name: 'ubuntu_' + name,
      urls: [`http://${subdomain || name}.ubuntu.com/ubuntu`],
      dists: (distSuffixes || [name]).map(s => (dist + (s && '-') + s)),
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
