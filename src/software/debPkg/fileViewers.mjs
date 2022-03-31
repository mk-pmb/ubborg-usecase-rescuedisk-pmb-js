// -*- coding: utf-8, tab-width: 2 -*-

const imageViewers = [
  'eog',
  'gpicview',
];

const pdfReaders = [
  'evince',   // starts quickly
  'okular',   // starts sloooow but nice table selection and image area copy
];

export default async (bun) => {
  bun.needs('debPkg', [
    ...imageViewers,
    ...pdfReaders,
  ]);
};
