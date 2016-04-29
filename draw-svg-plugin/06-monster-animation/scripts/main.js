"use strict";
/// <reference path="../../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../../typings/main/ambient/TweenMax/TweenMax.d.ts" />
/// <reference path="../../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
/// <reference path="../../../typings/main/ambient/jquery/index.d.ts" />
var $ = require('jquery');
var TimelineLite = require('TimelineLite');
require('CSSPlugin');
require('EasePack');
require('DrawSVGPlugin');
require('AttrPlugin');
require('MorphSVGPlugin');
//region Element Selectors
var $monstaPath = $('.monsta path');
var $arms = $('#arms');
//endregion
//region Animation Configuration
var duration = 1;
//endregion
//region Animation Sequence
var tl = new TimelineLite();
tl
    .set($monstaPath, {
    stroke: '#6ffee8',
    visibility: 'visible'
})
    .fromTo($monstaPath, duration, { drawSVG: '50% 50%' }, { drawSVG: true, ease: Power2.easeOut });
//endregion
//# sourceMappingURL=main.js.map