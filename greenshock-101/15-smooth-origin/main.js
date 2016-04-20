"use strict";
/// <reference path="../../typings/main/ambient/TweenMax/TweenMax.d.ts" />
/// <reference path="../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
require('TweenLite');
require('CSSPlugin');
require('AttrPlugin');
var TweenLite = require('TweenLite');
CSSPlugin.defaultSmoothOrigin = false;
TweenLite.to('#cards', 1, { rotation: 180 });
//TweenLite.to('#cards', 1, {scale: 2});
//TweenLite.to('#cards', 1, {rotation: 360, transformOrigin: "center center", delay: 2});
//# sourceMappingURL=main.js.map