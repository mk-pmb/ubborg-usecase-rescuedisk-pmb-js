// -*- coding: utf-8, tab-width: 2 -*-

import objPop from 'objpop';
import mustBe from 'typechecks-pmb/must-be';
import passwordHash from 'ansible-bogus-linux-pwhash';

import pkgMeta from '../package.json';
import gitCfg from './cfg/dfGitCfg';
import vdu from './vanillaDesktopUser';
import fileGeneratedHint from './fileGeneratedHint';

const paramDefaults = {
  rescueUser: {
    // ===== Required settings =====
    loginName: 'urd',
    // ^-- Set loginName to false to not create the account.
    // "urd" can mean Ubborg Rescue Disk, or a norse goddess of (past) fate.

    // ===== Optional settings =====
    homeDirPath: '/var/lib/' + pkgMeta.name,
    passwordHash,
    admin: true,
    homonymousGroupIdNum: 942,
    userIdNum: 'gid',
    shell: 'bash',
    windowManager: 'openbox',
    autoLogin: true,
    gitCfg,
  },
};

const xscreensaverCfg = {
  // Let me watch gparted progress from accross the room.
  path: '~/.xscreensaver',
  mimeType: 'text/plain',
  content: [
    fileGeneratedHint('# '),
    'mode: off',
    'lock: False',
    '',
  ].join('\n'),
};

async function urd(bun) {
  const param = bun.makeParamPopper().mustBe;
  const userSpec = param('dictObj', 'rescueUser');
  const mustUser = objPop(userSpec, { mustBe }).mustBe;
  const loginName = mustUser('nonEmpty str | fal', 'loginName');
  if (loginName === false) { return; }

  if (mustUser('bool', 'autoLogin')) {
    bun.needs('bundle', { url: 'lightdm/autologin', param: { loginName } });
  }

  await vdu(bun, {
    ...userSpec,
    autoLogin: undefined,
    extraUserFiles: [
      ...(userSpec.extraUserFiles || []),
      xscreensaverCfg,
    ],
  });
  // ^-- await: to ensure homeDir is declared
}

Object.assign(urd, {
  paramDefaults,
  inheritOtherParams: false,
});

export default urd;
