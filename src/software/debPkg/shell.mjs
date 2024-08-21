// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'bash => cmd:',
    'bash-completion',
    'shellcheck => cmd:', // linter for shell scripts.

    'mingetty', // reportedly it can --autologin easier than agetty.
    // mingetty is used by debparture to provide getty@tty1.service

    'screen => cmd:',
    'tmux => cmd:',

    'less => cmd:',
    'moreutils => cmd:vidir',
    'nano => cmd:',
    'procps => cmd:top',  // also provides a proper "ps".
    'psmisc => cmd:killall',
    'pv => cmd:',         // pipe viewer: progress bar with ETA
    'rename',
    'rlwrap => cmd:',

    'inotify-tools => cmd:inotifywait',
    'lockfile-progs',
  ]);
};
