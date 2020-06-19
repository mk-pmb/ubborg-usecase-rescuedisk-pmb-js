
<!--#echo json="package.json" key="name" underline="=" -->
ubborg-usecase-rescuedisk-pmb
=============================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
An example ubborg plan (bundle mixin) for an Ubuntu/GRUB/LVM rescue disk.
<!--/#echo -->



API
---

This module exports one function:

### mixin(bun[, opt])

Returns a promise for having declared the required resources
in the name of ubborg bundle `bun`.

`opt` may be an options object. For currently supported options (all optional),
[see here](dfopt.mjs).



Usage
-----

See tests. Will hopefully be simplified soon.


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
