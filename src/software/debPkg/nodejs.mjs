// -*- coding: utf-8, tab-width: 2 -*-

import mustBe from 'typechecks-pmb/must-be';
import lPad from 'lodash.padstart';

const dfNodeOpts = {
  version: 12,
  repo: {
    url: 'https://deb.nodesource.com/node_%1v.x/',
    // %Dv is a placeholder for the version number,
    // where D is a digit 1-9 to indicate how many digits wide
    // the number shall be, adding leading zeroes if necessary.
    components: ['main'],
  },
};


async function installNodejs(bun) {
  const mustNode = mustBe.tProp('Node.js settings',
    bun.makeParamPopper().mustBe('tru | dictObj', 'nodejs'));
  const mustRepo = mustBe.tProp('Node.js debian repo settings',
    mustNode('undef | dictObj', 'repo'));

  const version = mustNode('pos int', 'version');
  const url = mustRepo('nonEmpty str', 'url').replace(/%(\d)v/g,
    (m, w) => m && lPad(version, +w));

  await bun.needs('debPkgRepo', {
    name: 'nodejs',
    urls: [url],
    components: mustRepo('nonEmpty ary', 'components'),
  });

  await bun.needs('debPkg', [
    'nodejs',
  ]);
};

Object.assign(installNodejs, {
  paramDefaults: { nodejs: dfNodeOpts },
  inheritParam: {
    osVersion: true,
  },
  inheritOtherParams: false,
});

export default installNodejs;
