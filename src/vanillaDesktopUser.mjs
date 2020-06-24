// -*- coding: utf-8, tab-width: 2 -*-

async function vdu(bun, props) {
  const {
    loginName,
    homonymousGroupIdNum,
    windowManager,
  } = props;
  let { userIdNum } = props;
  if (userIdNum === 'gid') { userIdNum = homonymousGroupIdNum; }

  const groups = [
    loginName,
    'netdev',
    'dialout',
    'fuse',
    'saned',      // scanner
    'lp',         // printer config
    (props.admin && [
      'adm',
      'sudo',
    ]),
    props.groups,
  ];

  await bun.needs('osUser', {
    interactive: true,
    homeDirPath: '/home/' + loginName,
    ...props,
    userIdNum,
    groups,
    admin: undefined,
    homonymousGroupIdNum: undefined,
    windowManager: undefined,
  });

  await bun.needs('iniFile', {
    path: '/var/lib/AccountsService/users/' + loginName,
    sections: {
      User: {
        XSession: (windowManager || 'openbox'),
        XKeyboardLayouts: '',
      },
    },
  });
}









export default vdu;
