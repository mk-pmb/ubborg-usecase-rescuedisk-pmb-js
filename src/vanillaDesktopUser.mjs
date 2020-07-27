// -*- coding: utf-8, tab-width: 2 -*-

import mapMerge from 'map-merge-defaults-pmb';

import iniStyleNpmrc from './util/iniStyleNpmrc';

async function vdu(bun, props) {
  const {
    desktopBgColor,
    dontCreateHomeDir,
    extraUserFiles,
    gitCfg,
    homonymousGroupIdNum,
    loginName,
    windowManager,
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
    desktopBgColor: undefined,
    dontCreateHomeDir: undefined,
    extraUserFiles: undefined,
    gitCfg: undefined,
    homonymousGroupIdNum: undefined,
    windowManager: undefined,
  });

  await bun.needs('iniFile', {
    path: '/var/lib/AccountsService/users/' + loginName,
    sections: {
      User: {
        XSession: (windowManager || 'openbox'),
      },
    },
  });

  if (dontCreateHomeDir) { return; }

  await mapMerge.pr({ owner: loginName }, 'path', [
    '~/',
    '~/Desktop/',
    '~/.config/',
    '~/.config/ssh/',
    '~/.config/ssh/',
    '~/.config/autostart/',
    { path: '~/.config/user-dirs.locale',
      mimeType: 'text/plain',
      content: 'C\n',
    },
    ...(extraUserFiles || []),
  ], bun.needs.bind(bun, 'userFile'));

  await (desktopBgColor && bun.needs('xdgAutostarter', {
    owner: loginName,
    bfn: 'desktop_bgcolor',
    title: 'Set desktop background color',
    exec: 'xsetroot -solid ' + desktopBgColor,
  }));

  await (gitCfg && bun.needs('userFile', {
    owner: loginName,
    path: '~/.gitconfig',
    mimeType: 'static_ini',
    content: gitCfg,
    iniOpt: { ...iniStyleNpmrc, pairInd: '\t' },
  }));
}









export default vdu;
