#!/bin/sed -urf
# -*- coding: UTF-8, tab-width: 2 -*-

/^ += passwordHash: /s~(\$[^$"]{4})[^$"]+~\1…~g
/^ += deferredDebPkgs: /s~"installs": \[~&\n\r~
/^ += content: .{100,}/s~, "~,\n¬¶            "~g





s~\n\r.*$~…~
