// -*- coding: utf-8, tab-width: 2 -*-

import bob from '../../util/bundledOptionalBundles';

export default bob('software_npmPkg', {
}, {
  prereqStages: [
    '../debPkg/__stage__',
  ],
});
