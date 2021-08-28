// -*- coding: utf-8, tab-width: 2 -*-

import absdir from 'absdir';

const relPath = absdir(import.meta, '.');
const scriptName = 'disable_ethernet_powersave_on_buggy_adapters.sh';

export default async(bun) => {
  bun.needs('admFile', {
    pathPre: '/lib/systemd/system-sleep/ubborg.',
    path: scriptName,
    mimeType: 'text/plain',
    uploadFromLocalPath: relPath('files/' + scriptName),
    enforcedModes: 'a=rx,ug+w',
  });
};
