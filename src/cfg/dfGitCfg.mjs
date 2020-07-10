// -*- coding: utf-8, tab-width: 2 -*-

const dfGitCfg = {

  user: {
    name: 'User Name',
    email: 'user@host.tld',
  },

  color: {
    ui: 'auto',
  },

  'color "status"': {
    updated: 'bold yellow',
    changed: 'bold red',
    untracked: 'cyan',
  },

  merge: {
    ff: 'only',
  },

  receive: {
    denyDeletes: true,
    denyNonFastForwards: true,
  },

  push: {
    default: 'matching',
  },

  annex: {
    backends: 'SHA256E SHA512E',
  },

  alias: {
    chp: 'cherry-pick',
    rmt: 'remote',
    usi: 'update-server-info',
  },

};

export default dfGitCfg;
