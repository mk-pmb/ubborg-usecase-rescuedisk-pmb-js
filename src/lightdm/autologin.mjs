// -*- coding: utf-8, tab-width: 2 -*-

async function autologin(bun) {
  const param = bun.makeParamPopper().mustBe;
  const loginName = param('nonEmpty str', 'loginName');
  const timeoutSec = param('pos0 int', 'timeoutSec', 0);
  param.expectEmpty();

  await bun.needs('iniFile', {
    path: '/etc/lightdm/lightdm.conf.d/autologin.conf',
    sections: {
      'Seat:*': {
        'autologin-session':  'lightdm-autologin',
        'autologin-guest':    false,
        'autologin-user':     loginName,
        'autologin-user-timeout': timeoutSec,
      },
    },
  });
}

Object.assign(autologin, {

  inheritParams: {
    loginName: true,
    timeoutSec: true,
  },
  inheritOtherParams: false,

});

export default autologin;
