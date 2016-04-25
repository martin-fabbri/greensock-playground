"use strict";
/// <reference path="../../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
/// <reference path="../../../typings/main/ambient/jquery/index.d.ts" />
var $ = require('jquery');
var TimelineLite = require('TimelineLite');
require('CSSPlugin');
require('EasePack');
require('DrawSVGPlugin');
//region Element Selectors
var $path = $('#path');
var $circle = $('circle');
var $ellipse = $('ellipse');
var $rect = $('rect');
var $polyline = $('polyline');
//region Animation Config
var duration = 1;
var infiniteRepeatLoop = -1;
//endregion
//region Timeline Setup
var curbTl = new TimelineLite();
curbTl
    .set('circle', { stroke: 'red', strokeWidth: 6 })
    .fromTo($path, duration, { drawSVG: '0% 10%' }, { drawSVG: '90% 100%', delay: 0.5, ease: Bounce.easeOut })
    .from($circle, duration, { drawSVG: 0 })
    .from($ellipse, duration, { drawSVG: 0 })
    .from($rect, duration, { drawSVG: 0 })
    .from($polyline, duration, { drawSVG: 0 });
//endregion
//# sourceMappingURL=main.js.map