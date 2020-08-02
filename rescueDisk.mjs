// -*- coding: utf-8, tab-width: 2 -*-

import dfOpt from './src/dfOpt';

async function rescueDisk(bun) {
  const mustParam = bun.makeParamPopper().mustBe;
  // console.error(bun.getParams()).fail();

  bun.needs('subBundle', [
    'i18nLocales',
    'primaryKeyboard',
  ].map(function checkParam(name) {
    const param = mustParam('dictObj | fal', name);
    if (param === false) { return; }
    return { url: 'src/cfg/' + name, param };
  }).filter(Boolean));

  await bun.needs('subBundle', { url: 'src/user' });
  // ^-- await: to ensure homeDir is declared

  bun.needs('subBundle', [
    'src/workarounds/',

    'src/software/debPkg/__stage__',
    'src/software/nonDebDrivers/',
    'src/software/npmPkg/__stage__',
  ]);
}

Object.assign(rescueDisk, {
  paramDefaults: dfOpt,
});

export default rescueDisk;
