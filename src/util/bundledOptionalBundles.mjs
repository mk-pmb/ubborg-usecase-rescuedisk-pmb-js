// -*- coding: utf-8, tab-width: 2 -*-

import pProps from 'p-props';

function true2undef(x) { return (x === true ? undefined : x); }

function makeBob(paramKey, defaultFeatureCfg, origOpt) {
  const opt = (origOpt || false);
  const subResType = (opt.subResType || 'bundle');
  async function bob(bun) {
    const features = bun.makeParamPopper().mustBe('dictObj', paramKey);
    await pProps(features, function need(p, url) {
      return (p && bun.needs(subResType, { url, param: true2undef(p) }));
    });
  }
  Object.assign(bob, {
    paramDefaults: { [paramKey]: defaultFeatureCfg },
    ...opt.extras,
  });
  return bob;
}

export default makeBob;
