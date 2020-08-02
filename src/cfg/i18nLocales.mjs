// -*- coding: utf-8, tab-width: 2 -*-

const paramDefaults = {
  add: 'en_US.UTF-8',
  // ^- Any combination of (nested) array(s) and/or string(s).
  //    Strings with multiple locale names may use any (non-empty)
  //    combination of whitespace and/or comma as separator.

  defaultCharsetSuffix: '.UTF-8',
  // ^- A string to append to locale names that don't contain a dot.
  //    If you need to avoid the suffix or want multiple suffixes,
  //    set this to an empty string and make your bundle generate
  //    the exact combinations you want.
};


const sepRgx = /[\s,]+(?=\w)/;
// ^- The starting letter requirement is an easy way to ensure
//    that suffix symbols stay with their name even if the input
//    is tabulated inside the string.

async function dfKbd(bun) {
  const param = bun.makeParamPopper().mustBe;
  let add = String(param('str | ary', 'add')).split(sepRgx);
  add = add.map(s => s.trim()).filter(Boolean);

  const noDotSuf = param('str | fal | nul', 'defaultCharsetSuffix');
  if (noDotSuf) { add = add.map(s => s + (s.includes('.') ? '' : noDotSuf)); }

  param.expectEmpty();
  bun.needs('i18nLocale', add);
}

Object.assign(dfKbd, {
  paramDefaults,
  inheritOtherParams: false,
});

export default dfKbd;
