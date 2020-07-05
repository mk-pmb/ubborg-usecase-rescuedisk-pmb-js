// -*- coding: utf-8, tab-width: 2 -*-

const defaultOpts = {
  rescueUser: {},         // see src/rescueUser.mjs.
  workarounds: {},        // see src/workarounds/
  software_debPkg: {},    // see src/software/debPkg/
  primaryKeyboard: {},    // see src/defaultKeyboard.mjs; or false to skip.
  osVersion: {
    family: 'linux',
    distro: 'ubuntu',
    codename: 'focal',
  },
};

export default defaultOpts;
