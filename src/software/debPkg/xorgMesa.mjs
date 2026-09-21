// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [
    'libgl1-mesa-glx',

    'libegl1-mesa',

    'mesa-utils',
    'mesa-utils-extra',
  ]);

  bun.needs('admFile', {
    path: '/etc/profile.d/nouveau_use_software_rendering.sh',
    mimeType: 'lines',
    content: [
      '# This file is meant to keep the GeForce fan quiet, by making apps',
      '# such as browsers use software rendering, while still allowing',
      '# 2D acceleration for e.g. window manager compositing.',
      '',
      'if ! [ -L /etc/X11/libgl.enable-full-3d-accel ]; then',
      '  # For easy documentation, make the symlink point to this file here.',
      '  LIBGL_ALWAYS_SOFTWARE=1',
      '  export LIBGL_ALWAYS_SOFTWARE',
      'fi',
      '',
      '# To set powersave behavior at runtime, use',
      '# /sys/class/drm/card*/device/power/control',
      '# However, the nouveau driver only offers the "allow kernel to suspend',
      '# the GPU when idle" flag, i.e. mode names "auto" (default) and "on".',
    ],
  });

};
