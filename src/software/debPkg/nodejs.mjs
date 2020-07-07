// -*- coding: utf-8, tab-width: 2 -*-

import mustBe from 'typechecks-pmb/must-be';
import lPad from 'lodash.padstart';

const nodeSourceBase = 'https://deb.nodesource.com/';
const dfNodeOpts = {
  version: 12,
  repo: {
    debUrl: nodeSourceBase + 'node_%1v.x/',
    // %Dv is a placeholder for the version number,
    // where D is a digit 1-9 to indicate how many digits wide
    // the number shall be, adding leading zeroes if necessary.
    components: ['main'],
  },
};


function makeVersionTemplateRenderer(v, mustRepo) {
  function ins(m, w) { return m && lPad(v, +w); }
  const f = function versionTmpl(s) { return s && s.replace(/%(\d)v/g, ins); };
  return f;
}


async function installNodejs(bun) {
  const mustNode = mustBe.tProp('Node.js setting ',
    bun.makeParamPopper().mustBe('tru | dictObj', 'nodejs'));
  const repoInfo = mustNode('undef | dictObj', 'repo');
  const mustRepo = mustBe.tProp('Node.js debian repo setting ', repoInfo);

  const version = mustNode('pos int', 'version');
  const verTpl = makeVersionTemplateRenderer(version, mustRepo);

  await bun.needs('debPkgRepo', {
    name: 'nodejs',
    debUrls: [verTpl(mustRepo('nonEmpty str', 'debUrl'))],
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
