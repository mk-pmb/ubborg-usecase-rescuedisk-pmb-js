// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  bun.needs('admFile', {
    pathPre: '/etc/ssh/sshd_config.d/ubborg-',
    path: 'pswd-auth-off',
    pathSuf: '.conf',
    mimeType: 'utf8_tw; 2; #',
    content: [
      'PasswordAuthentication no',
    ],
  });
};
