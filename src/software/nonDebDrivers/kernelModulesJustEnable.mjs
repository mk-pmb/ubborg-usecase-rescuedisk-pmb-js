// -*- coding: utf-8, tab-width: 2 -*-

const drivers = {

  pinnacle_pctv: 'bttv',

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

export default async(bun) => {
  bun.needs('admFile', Object.entries(drivers).map(fmt));
};
