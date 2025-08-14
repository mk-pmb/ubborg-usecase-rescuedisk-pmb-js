// -*- coding: utf-8, tab-width: 2 -*-

import osVerInfo from 'ubborg-sysfacts-helper-pmb/util/osVersionInfo.mjs';

export default async (bun) => {
  const { verNumYear } = await osVerInfo(bun);
  bun.needs('debPkg', [
    'imagemagick',

    ((verNumYear <= 22) && 'pinta => cmd:'),
    // drawing: Cannot find how to zoom in Ubuntu focal's ancient version.
    // gnome-paint: "the zoom feature has not yet been implemented."
    // mtpaint: Cannot move selection content. Dev considers this a feature!
    // mypaint: Cannot paint single pixels even with minimum brush size.
    // xpaint: Crashes on focal when trying to move selection.
  ].filter(Boolean));
};
