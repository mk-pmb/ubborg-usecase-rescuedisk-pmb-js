// -*- coding: utf-8, tab-width: 2 -*-

import sysdDropIn from 'ubborg-sysd-dropin-pmb';

export default async (bun) => {
  bun.needs('admFile', [
    sysdDropIn('lib:dbus.socket', 'modernize_for_ubuntu_focal',
      { Socket: { ListenStream: ['', '/run/dbus/system_bus_socket'] } }),
  ]);
};
