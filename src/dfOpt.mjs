// -*- coding: utf-8, tab-width: 2 -*-

const defaultOpts = {
  osVersion: {
    family: 'linux',
    distro: 'ubuntu',
    codename: 'focal',
  },
  primaryKeyboard: {},    // see src/defaultKeyboard.mjs; or false to skip.
  rescueUser: {},         // see src/rescueUser.mjs.
  workarounds: {},        // see src/workarounds/
  software_debPkg: {},    // see src/software/debPkg/
  software_npmPkg: {},    // see src/software/npmPkg/
};

export default defaultOpts;
