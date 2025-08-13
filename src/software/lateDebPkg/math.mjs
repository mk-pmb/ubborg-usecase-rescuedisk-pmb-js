// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'bc',
    'galculator',
    'geogebra', // dynamic graphing geometry visualizer
    'gnumeric',
    'maxima-share',
    'maxima',
    'wxmaxima',
  ]);
};
