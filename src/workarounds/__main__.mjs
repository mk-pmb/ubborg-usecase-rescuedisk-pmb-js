// -*- coding: utf-8, tab-width: 2 -*-

import bob from '../util/bundledOptionalBundles';

export default bob('workarounds', {
  avoidAccidentialTouchpadTap: true,
  avoidDefaultAptUpdates: true,

  presentationMode: true,
  // Display always-on, to watch progress from accross the room.
});
