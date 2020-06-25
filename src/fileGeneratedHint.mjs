// -*- coding: utf-8, tab-width: 2 -*-

import pkgMeta from '../package.json';

function fileGeneratedHint(before, after) {
  return ((before || '') + 'This file was generated using ' + pkgMeta.name
    + ' v' + pkgMeta.version + (after || ''));
}

export default fileGeneratedHint;
