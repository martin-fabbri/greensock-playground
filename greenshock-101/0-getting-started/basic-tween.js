"use strict";
/// <reference path="../../typings/main/ambient/TweenLite/TweenMax.d.ts" />
/// <reference path="../../typings/main/ambient/TimelineLite/TimelineMax.d.ts" />
var TweenLite = require('TweenLite');
require('CSSPlugin');
// logo1 animation
TweenLite.to('#logo1', 10, {
    left: 600,
    backgroundColor: 'red',
    padding: 20,
    borderColor: 'white',
    borderRadius: 26
});
// logo2 animation
TweenLite.to('#logo2', 10, { x: 300 });
//# sourceMappingURL=basic-tween.js.map