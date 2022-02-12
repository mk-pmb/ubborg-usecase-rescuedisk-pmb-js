// -*- coding: utf-8, tab-width: 2 -*-

import mapMerge from 'map-merge-defaults-pmb';

import iniStyleNpmrc from './util/iniStyleNpmrc.mjs';

const defaultUserFiles = [
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
];

async function vdu(bun, props) {
  const {
    desktopBgColor,
    dontCreateHomeDir,
    extraUserFiles,
    gitCfg,
    loginName,
    windowManager,
  } = props;
  if (loginName === false) { return; }
  let {
    userIdNum,
    primaryGroupName,
  } = props;

  await (async function homGrp() {
    const hgKey = 'homonymousGroupIdNum';
    const hgVal = props[hgKey];
    if (hgVal) {
      if (primaryGroupName !== undefined) {
        const e = ('Props primaryGroupName and ' + hgKey
          + ' are mutually exclusive');
        throw new Error(e);
      }
      primaryGroupName = loginName;
    }
    if (userIdNum === 'gid') {
      userIdNum = hgVal;
      await bun.needs('osUserGroup', { grName: loginName, grIdNum: hgVal });
      return;
    }
    const e = ('Option ' + hgKey
      + ' is currently implemented only for userIdNum=gid');
    throw new Error(e);
  }());

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
    'audio',
    'nopasswdlogin',  // ref. https://askubuntu.com/a/210480
    props.groups,
  ];

  await bun.needs('osUser', {
    interactive: true,
    homeDirPath: '/home/' + loginName,
    shell: 'bash',
    ...props,
    userIdNum,
    primaryGroupName,
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
        // ^- Refers to `/usr/share/xsessions/${XSession}.desktop`.
        //    ATTN: Case sensitive! e.g. 'xfce' but 'LXDE'.
      },
    },
  });


  await bun.needs('userFile', mapMerge({ owner: loginName }, 'path', [
    ...(dontCreateHomeDir ? [] : defaultUserFiles),
    ...(extraUserFiles || []),
  ]));
  if (dontCreateHomeDir) { return; }

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
