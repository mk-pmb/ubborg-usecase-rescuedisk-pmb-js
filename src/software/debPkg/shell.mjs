// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'bash => cmd:',
    'bash-completion',

    'mingetty', // reportedly it can --autologin easier than agetty.
    // mingetty is used by debparture to provide getty@tty1.service

    'screen => cmd:',
    'tmux => cmd:',

    'less => cmd:',
    'moreutils => cmd:vidir',
    'nano => cmd:',
    'procps => cmd:top',  // also provides a proper "ps".
    'pv => cmd:',         // pipe viewer: progress bar with ETA
    'rename',
    'rlwrap => cmd:',
    'psmisc => cmd:killall',

    'inotify-tools => cmd:inotifywait',
    'lockfile-progs',
  ]);
};
