#!/bin/sed -urf
# -*- coding: UTF-8, tab-width: 2 -*-

/^ += passwordHash: /s~(\$[^$"]{4})[^$"]+~\1…~g
/^ += deferredDebPkgs: /{
  s~("(removes|installs)": \[)"[^\x5D]+~\1…~g
  s~("modifies": )[0-9]+,~\1…,~
}
/^ += content: .{100,}/s~, "~,\n¬¶            "~g
/^ += debugHints: \{/d
/^ += uploadFromLocalPath: /s~"[^"]+((/[^/]+){3})~"…\1~g





s~\n\r.*$~…~
