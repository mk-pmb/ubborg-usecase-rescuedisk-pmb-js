// -*- coding: utf-8, tab-width: 2 -*-

import pProps from 'p-props';

function makeBob(paramKey, defaultFeatureCfg, origOpt) {
  const opt = (origOpt || false);
  const subResType = (opt.subResType || 'bundle');
  async function bob(bun) {
    let features = bun.makeParamPopper().mustBe('bool | dictObj', paramKey);
    if (features === false) { return; }
    const all = (features === true);
    if (all) { features = defaultFeatureCfg; }
    // console.error(paramKey, features);
    await pProps(features, function need(p, url) {
      const spec = { url };
      if ((p === false) && (!all)) { return; }
      if (typeof p !== 'boolean') { spec.param = { [url]: p }; }
      return bun.needs(subResType, spec);
    });
  }
  Object.assign(bob, {
    paramDefaults: { [paramKey]: defaultFeatureCfg },
    ...opt.extras,
  });
  return bob;
}

export default makeBob;
