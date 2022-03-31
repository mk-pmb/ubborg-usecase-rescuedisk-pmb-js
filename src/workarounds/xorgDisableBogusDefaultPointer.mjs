// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('xorgConfigDropFile', {
    path: '20-workaround-focal-ignore-default-pointer',
    section: [
      'InputClass',
      'Identifier "Annoying doppelganger of real, more specific touchpads"',
      'MatchProduct "<default pointer>"',
      '# MatchIsPointer "yes"',
      '# MatchIsTouchoad "yes"',
      'Option "Ignore" "yes"',
    ],
  });
};
