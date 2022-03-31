// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'bash',
    'bash-completion',

    'mingetty', // reportedly it can --autologin easier than agetty.

    'screen',
    'tmux',

    'less',
    'moreutils',  // provides vidir
    'nano',
    'procps',   // provides "top", and a proper "ps".
    'pv',       // pipe viewer: progress bar with ETA
    'rename',
    'rlwrap',
    'psmisc',   // provides killall

    'inotify-tools',
    'lockfile-progs',
  ]);
};
