// -*- coding: utf-8, tab-width: 2 -*-

const explain = [
  '# Workaround: Allow multiple instances even with pavucontrol 4.0-1build1',
  '# from Ubuntu 20.04.2 LTS focal official repos.',
];

const noDBus = 'export DBUS_SESSION_BUS_ADDRESS=';
const bpc = '/bin/pavucontrol';
const fix = noDBus + '; exec /usr' + bpc + ' "$@"; exit $?';
const wrapper = ['#!/bin/sh', fix, '#', ...explain, '#'];

export default async (bun) => {
  bun.needs('file', {
    path: '/usr/local' + bpc,
    enforcedModes: 'a=rx',
    mimeType: 'lines',
    content: [...wrapper, '# Installed via ' + bun.shortRelUrl()],
  });
};
