// -*- coding: utf-8, tab-width: 2 -*-

import shq from 'shq';

const paramDefaults = {
  XkbModel: 'pc105', // for a list, run: localectl list-x11-keymap-models
  XkbLayout: 'us',                    // localectl list-x11-keymap-layouts
  XkbVariant: 'nodeadkeys',           // localectl list-x11-keymap-variants
  XkbOptions: 'caps:none',            // localectl list-x11-keymap-options
  backspace: 'guess',
};

async function dfKbd(bun) {
  const param = bun.makeParamPopper().mustBe;
  const etcKbd = Object.keys(paramDefaults).map(k => (k.toUpperCase()
    + '=' + shq.always(param('str', k)) + '\n'));
  param.expectEmpty();

  bun.needs('admFile', {
    path: '/etc/default/keyboard',
    mimeType: 'utf8_tw; 2; #',
    content: ['# Keyboard config, see man 5 keyboard\n', ...etcKbd],
  });
}

Object.assign(dfKbd, {
  paramDefaults,
  inheritOtherParams: false,
});

export default dfKbd;
