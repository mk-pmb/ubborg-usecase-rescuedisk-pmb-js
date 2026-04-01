#!/bin/sed -urf
# -*- coding: UTF-8, tab-width: 2 -*-
s~^\S+:~__&__~
s:\b[a-z][A-Za-z0-9_-]+\[([ -Z_-~]+)\]:`&`:g
s~ (finalizePlan|hatch|waitForAllSubPlanning): ~ \1:\n    * ~g
s~( →) ~\1\n      * ~g
s~(file:/*|)/(home)/[%,-9@-Z_a-z]+~`&`~g
