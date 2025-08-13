// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'apache2-utils => cmd:htpasswd',
    'ent',
    'libcrypt-ssleay-perl',
    'libnet-ssleay-perl',
    'oathtool',   // CLI 2FA token generator for HOTP and TOTP
  ]);
};
