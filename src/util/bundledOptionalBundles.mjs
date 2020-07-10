// -*- coding: utf-8, tab-width: 2 -*-

import aMap from 'map-assoc-core';

function makeBob(paramKey, defaultFeatureCfg, origOpt) {
  const opt = (origOpt || false);
  const subResType = (opt.subResType || 'bundle');
  async function bob(bun) {
    let features = bun.makeParamPopper().mustBe('bool | dictObj', paramKey);
    if (features === false) { return; }
    const all = (features === true);
    if (all) { features = defaultFeatureCfg; }
    // console.error(paramKey, features);
    const specs = [];
    aMap(features, function decide(p, url) {
      const spec = { url };
      if ((p === false) && (!all)) { return; }
      if (typeof p !== 'boolean') { spec.param = { [url]: p }; }
      specs.push(spec);
    });
    if (!specs.length) { return; }
    const preStage = (opt.prereqStages || false);
    if (preStage.length) { await bun.needs('stage', preStage); }
    await bun.needs(subResType, specs);
  }
  Object.assign(bob, {
    paramDefaults: { [paramKey]: defaultFeatureCfg },
    ...opt.extras,
  });
  return bob;
}

export default makeBob;
