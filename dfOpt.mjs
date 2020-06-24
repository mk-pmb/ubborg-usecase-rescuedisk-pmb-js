// -*- coding: utf-8, tab-width: 2 -*-

import passwordHash from 'ansible-bogus-linux-pwhash';

import pkgMeta from './package.json';

const defaultOpts = {
  rescueUser: {
    // Details of the user account to create, or false to not create one.
    loginName: 'urd', // Ubborg Rescue Disk, or a norse goddess of (past) fate.
    homeDirPath: '/var/lib/' + pkgMeta.name,
    passwordHash,
    admin: true,
    homonymousGroupIdNum: 942,
    userIdNum: 'gid',
    shell: 'bash',
    windowManager: 'openbox',
  },
  autoLogin: true, // Whether to auto-login the rescueUser.
};

export default defaultOpts;
