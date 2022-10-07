// -*- coding: utf-8, tab-width: 2 -*-

const drivers = {

  pinnacle_pctv: 'bttv',

  // For modules that must be (re)loaded late in focal, see
  // src/workarounds/focal/lateModProbes.mjs
};


function fmt([path, content]) {
  return {
    pathPre: '/etc/modules-load.d/ubborg.',
    path,
    pathSuf: '.conf',
    mimeType: 'utf8_tw; 20; #',
    content,
  };
}

export default async (bun) => {
  bun.needs('admFile', Object.entries(drivers).map(fmt));
};
