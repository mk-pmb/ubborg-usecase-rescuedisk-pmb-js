// -*- coding: utf-8, tab-width: 2 -*-

import objPop from 'objpop';
import mustBe from 'typechecks-pmb/must-be';

import dfOpt from './dfOpt';
import vdu from './src/vanillaDesktopUser';

async function rescueDisk(bun) {
  const param = bun.makeParamPopper().mustBe;
  const userSpec = param('dictObj', 'rescueUser');
  const mustUser = objPop(userSpec, { mustBe }).mustBe;
  const loginName = mustUser('nonEmpty str', 'loginName');

  vdu(bun, userSpec);
  if (param('bool', 'autoLogin')) {
    bun.needs('subBundle', {
      url: 'src/lightdm/autologin',
      param: { loginName },
    });
  }
}

Object.assign(rescueDisk, {

  paramDefaults: dfOpt,

});

export default rescueDisk;
