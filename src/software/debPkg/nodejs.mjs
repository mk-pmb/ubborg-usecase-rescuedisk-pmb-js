// -*- coding: utf-8, tab-width: 2 -*-

import mustBe from 'typechecks-pmb/must-be';
import lPad from 'lodash.padstart';
import loPick from 'lodash.pick';

import iniStyleNpmrc from '../../util/iniStyleNpmrc';

const dfNodeOpts = {
  version: 12,
  repo: {
    debUrl: 'https://deb.nodesource.com/node_%1v.x/',
    // %Dv is a placeholder for the version number,
    // where D is a digit 1-9 to indicate how many digits wide
    // the number shall be, adding leading zeroes if necessary.
    components: ['main'],

    keyUrls: ['/gpgkey/nodesource.gpg.key'],
    keyVerify: {
      gpgKeySummary: [
        'pub  4096R/68576280 2014-06-13 NodeSource <gpg@nodesource.com>',
        'sub  4096R/AA01DA2C 2014-06-13',
      ],
      sha512hex: [
        'fbd658af32f3c6d938b3ce5f126b8103a87f3ec871a986744a1d420b72cb56f7',
        '2228417c6ba4bbe07bf31e5a2b3b4e0611cdbebd989beeb2fa942dcb06fd5a18',
      ],
    },
  },
  etcNpmrc: {
    audit: false,
    'https-proxy': true,    // true = same as proxy
    'package-lock': false,
    proxy: null,
    registry: 'https://registry.npmjs.org/',
    'send-metrics': false,
    'update-notifier': false,
  },
};


const globalNodeModulesPaths = [
  '/usr/lib/nodejs',
  '/usr/lib/node_modules',
  '/usr/share/javascript',
];


function makeVersionTemplateRenderer(v) {
  function ins(m, w) { return m && lPad(v, +w); }
  const f = function versionTmpl(s) { return s && s.replace(/%(\d)v/g, ins); };
  return f;
}


async function installNodejs(bun) {
  const nodeSett = bun.makeParamPopper().mustBe('tru | dictObj', 'nodejs');
  const mustNode = mustBe.tProp('Node.js setting ', nodeSett);
  const repoInfo = mustNode('undef | dictObj', 'repo');
  // console.error(repoInfo).fail();
  const mustRepo = mustBe.tProp('Node.js debian repo setting ', repoInfo);

  const version = mustNode('pos int', 'version');
  const verTpl = makeVersionTemplateRenderer(version);
  const debUrl = verTpl(mustRepo('nonEmpty str', 'debUrl'));

  await bun.needs('debPkgRepo', {
    name: 'nodejs',
    debUrls: [debUrl],
    components: mustRepo('nonEmpty ary', 'components'),
    ...loPick(repoInfo, [
      'keyUrls',
      'keyVerify',
    ]),
  });

  await bun.needs('debPkg', [
    'nodejs',
  ]);

  await bun.needs('admFile', [
    '/usr/local/bin/nodejs =-> /usr/bin/node',
    { path: '/etc/profile.d/nodejs.urd.sh',
      mimeType: 'utf8_tw; 2; #',
      content: [
        ('NODE_PATH=' + globalNodeModulesPaths.join(':')),
        'export NODE_PATH',
      ],
    },
  ]);

  const npmrc = mustNode('undef | fal | dictObj', 'etcNpmrc');
  if (npmrc) {
    if (npmrc['https-proxy'] === true) { npmrc['https-proxy'] = npmrc.proxy; }
    await bun.needs('admFile', {
      path: '/etc/npmrc',
      mimeType: 'static_ini',
      content: { '\n': npmrc },
      iniOpt: iniStyleNpmrc,
    });
  }
};

Object.assign(installNodejs, {
  paramDefaults: { nodejs: dfNodeOpts },
  inheritParam: {
    osVersion: true,
  },
  inheritOtherParams: false,
});

export default installNodejs;
