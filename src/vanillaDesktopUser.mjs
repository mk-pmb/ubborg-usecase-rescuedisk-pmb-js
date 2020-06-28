// -*- coding: utf-8, tab-width: 2 -*-

import pMap from 'p-map';

async function vdu(bun, props) {
  const {
    loginName,
    homonymousGroupIdNum,
    windowManager,
    extraUserFiles,
  } = props;
  if (loginName === false) { return; }
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
    extraUserFiles: undefined,
  });

  await bun.needs('iniFile', {
    path: '/var/lib/AccountsService/users/' + loginName,
    sections: {
      User: {
        XSession: (windowManager || 'openbox'),
      },
    },
  });

  await pMap([
    '~/',
    '~/Desktop',
    '~/.config',
    '~/.config/ssh',
    '~/.config/ssh',
    '~/.config/autostart',
    ...(extraUserFiles || []),
  ], function userFile(spec) {
    if (!spec.path) { return userFile({ path: spec }); }
    return bun.needs('userFile', {
      owner: loginName,
      mimeType: 'dir',
      ...spec,
    });
  });
}









export default vdu;
