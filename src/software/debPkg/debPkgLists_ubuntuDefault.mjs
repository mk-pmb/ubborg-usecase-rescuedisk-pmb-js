// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
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
      dists: (distSuffixes || [name]).map(
        s => ('%{codename}' + (s && '-') + s)),
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
