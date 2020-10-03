// -*- coding: utf-8, tab-width: 2 -*-

import fileGeneratedHint from '../fileGeneratedHint';

export default async(bun) => {
  const dropin = {
    pathPre: '/etc/systemd/user/pulseaudio.',
    pathSuf: '.d/audio_group_only.conf',
    mimeType: 'lines',
    content: [
      fileGeneratedHint('# ', '\n'),
      '[Unit]',
      'ConditionGroup=audio',
    ],
  };
  bun.needs('admFile', [
    { ...dropin, path: 'service' },
    { ...dropin, path: 'socket' },
  ]);
};
