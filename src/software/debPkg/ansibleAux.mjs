// -*- coding: utf-8, tab-width: 2 -*-

const fixRootBecomeUser = [
  // When running a task as root and a subtask shall "become_user:"
  // a non-root user, ansible needs a secure way to share the task files
  // with that other user.
  // The recommended way for Ubuntu is setfacl from apt package acl:
  'acl => cmd:setfacl',
];


export default async(bun) => {
  bun.needs('debPkg', [
    ...fixRootBecomeUser,
  ]);
};
