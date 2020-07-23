// -*- coding: utf-8, tab-width: 2 -*-

const pkzip = [
  'zip',
  'unzip',
  'fuse-zip',
];

const lzip = [
  'lhasa', // provides lha for *.lzh
  'liblz4-tool',
  'lunzip',
  'lzip',
  'lziprecover',
  'lzma',
];

export default async(bun) => {
  bun.needs('debPkg', [
    'file',
    'sharutils',   // uuencode
    'par2',     // parity check/repair tool
    // ¬focal // 'pypar2',

    'archivemount',
    'p7zip-full',
    'plzip',
    'rar',

    ...lzip,
    ...pkzip,
  ]);
};
