// -*- coding: utf-8, tab-width: 2 -*-
/*

Purpose on the rescue disk:
Webcam + barcode reader = Easily import secrets (e.g. WiFi PSK)
from paper backup or another device's screen.

*/

export default async (bun) => {
  bun.needs('debPkg', [
    'barcode',
    'qtqr',
    'qrencode',
    'zbar-tools',
  ]);
};
