// -*- coding: utf-8, tab-width: 2 -*-

export default async (bun) => {
  bun.needs('debPkg', [

    'ca-certificates', /*
      :TODO: Default certificates are probably required to install from many
      https:// apt repos (e.g. nodesource), but we can't put it into early or
      apt will fail with "No candidate version found for ca-certificates".
      => We might need an additional stage for them. As soon as this becomes
        an issue demonstrable in Github CI, it might be worth reporting an
        issue with nodesource.
    */

  ]);
};
