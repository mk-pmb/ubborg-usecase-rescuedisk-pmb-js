// -*- coding: utf-8, tab-width: 2 -*-

import nodeUrlLib from 'url';

import mustBe from 'typechecks-pmb/must-be';
import lPad from 'lodash.padstart';
import loPick from 'lodash.pick';

const dfNodeOpts = {
  version: 12,
  repo: {
    debUrl: 'https://deb.nodesource.com/node_%1v.x/',
    // %Dv is a placeholder for the version number,
    // where D is a digit 1-9 to indicate how many digits wide
    // the number shall be, adding leading zeroes if necessary.
    components: ['main'],

    trustedLocalAptKeyRingName: 'nodesource',
    // ^- For now you'll need a pre-made, already-converted
    //    /etc/apt/trusted.gpg.d/nodesource.gpg that we can just copy.
    keyUrl: '/gpgkey/nodesource.gpg.key',
    keyVerify: {
      summary: [
        'pub  4096R/68576280 2014-06-13 NodeSource <gpg@nodesource.com>',
        'sub  4096R/AA01DA2C 2014-06-13',
      ],
      sha512hex: [
        'fbd658af32f3c6d938b3ce5f126b8103a87f3ec871a986744a1d420b72cb56f7',
        '2228417c6ba4bbe07bf31e5a2b3b4e0611cdbebd989beeb2fa942dcb06fd5a18',
      ],
    },
  },
};


function makeVersionTemplateRenderer(v, mustRepo) {
  function ins(m, w) { return m && lPad(v, +w); }
  const f = function versionTmpl(s) { return s && s.replace(/%(\d)v/g, ins); };
  return Object.assign(f, {
    prop(k) { return { [k]: f(mustRepo('nonEmpty str', k)) }; },
  });
}

function urlResolveHref(h, b) { return String(new nodeUrlLib.URL(h, b)); }


async function installNodejs(bun) {
  const nodeSett = bun.makeParamPopper().mustBe('tru | dictObj', 'nodejs');
  const mustNode = mustBe.tProp('Node.js setting ', nodeSett);
  const repoInfo = mustNode('undef | dictObj', 'repo');
  const mustRepo = mustBe.tProp('Node.js debian repo setting ', repoInfo);

  const version = mustNode('pos int', 'version');
  const verTpl = makeVersionTemplateRenderer(version, mustRepo);
  const debUrl = verTpl(mustRepo('nonEmpty str', 'debUrl'));

  let keyUrl = mustRepo('undef | nul | nonEmpty str', 'keyUrl');
  if (keyUrl) { keyUrl = urlResolveHref(verTpl(keyUrl), debUrl); }

  await bun.needs('debPkgRepo', {
    name: 'nodejs',
    debUrls: [debUrl],
    components: mustRepo('nonEmpty ary', 'components'),
    ...verTpl.prop('trustedLocalAptKeyRingName'),
    keyUrl,
    ...loPick(repoInfo, [
      'keyVerify',
    ]),
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
