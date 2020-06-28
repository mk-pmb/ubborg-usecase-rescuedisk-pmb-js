// -*- coding: utf-8, tab-width: 2 -*-

import dfOpt from './src/dfOpt';

async function rescueDisk(bun) {
  const param = bun.makeParamPopper().mustBe;

  const kbd = param('dictObj | fal', 'primaryKeyboard');
  if (kbd) {
    bun.needs('subBundle', { url: 'src/defaultKeyboard', param: kbd });
  }

  await bun.needs('subBundle', { url: 'src/user' });
  // ^-- await: to ensure homeDir is declared

  bun.needs('subBundle', { url: 'src/workarounds/' });
  bun.needs('subBundle', { url: 'src/software/' });
}

Object.assign(rescueDisk, {
  paramDefaults: dfOpt,
});

export default rescueDisk;
