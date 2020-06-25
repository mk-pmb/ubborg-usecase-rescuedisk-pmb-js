
<!--#echo json="package.json" key="name" underline="=" -->
ubborg-usecase-rescuedisk-pmb
=============================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
An example ubborg bundle for an Ubuntu/GRUB/LVM rescue disk.
<!--/#echo -->


### Stability: Alpha preview


API
---

This module exports an ubborg module that accepts the `param`s
[described here](src/dfOpt.mjs).



Usage
-----

For default params, your bundle can be as easy as:

<!--#include file="test/example_plans/vanilla.mjs" code="javascript" -->
<!--#verbatim lncnt="5" -->
```javascript
export default async(bun) => {
  bun.needs('bundle', 'cjs:ubborg-usecase-rescuedisk-pmb');
};
```
<!--/include-->


<!--#toc stop="scan" -->



Known issues
------------

* Abusing bundle params to describe per-user resources introduces unjustified
  artificial singleton limitations. This is a dirty hack to bridge the time
  until ubborg supports user-supplied resource types.
* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
