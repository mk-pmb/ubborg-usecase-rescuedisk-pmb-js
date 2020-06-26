// -*- coding: utf-8, tab-width: 2 -*-

async function autologin(bun) {
  const param = bun.makeParamPopper().mustBe;
  const loginName = param('nonEmpty str', 'loginName');
  const timeoutSec = param('pos0 int', 'timeoutSec', 0);
  param.expectEmpty();

  bun.needs('debPkg', [
    'lightdm',
  ]);

  bun.needs('file', {
    path: '/etc/lightdm/user_session_prefs',
    mimeType: 'sym',
    content: '/var/lib/AccountsService/users',
  });

  await bun.needs('admFile', {
    path: '/etc/lightdm/lightdm.conf.d/autologin.conf',
    mimeType: 'static_ini',
    content: {
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
