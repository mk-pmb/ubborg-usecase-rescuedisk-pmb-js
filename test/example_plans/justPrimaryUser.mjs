// -*- coding: utf-8, tab-width: 2 -*-
/*

This plan is for debugging the ansible groups append deprecation warning:

> 'append' is set, but no 'groups' are specified. Use 'groups' for
> appending new groups.This will change to an error in Ansible 2.14.

The bigger problem is that Ansible 2.14 will apparently start to remove
users from all groups not mentioned in the user command, and I haven't
found any way to disable this destructive interference yet.
Maybe we have to add a pre-step to enumerate previous group memberships
and insert them into the list.

*/

import sysFactsHelper from 'ubborg-sysfacts-helper-pmb';

import hostFacts from './inc/vanilla.hostFacts.mjs';
import primaryUserRecipe from '../../src/user.mjs';
import vanillaDesktopUser from '../../src/vanillaDesktopUser.mjs';


export default async (bun) => {
  await sysFactsHelper(bun, hostFacts, true);
  await vanillaDesktopUser(bun, {
    ...primaryUserRecipe.paramDefaults.rescueUser,
    autoLogin: undefined,
  });
};
