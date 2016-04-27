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
var $bracketLeft = $('.bracketLeft');
var $bracketRight = $('.bracketRight');
var $tomato = $('#tomato');
var $tomatoLeft = $('.tomatoLeft');
var $tomatoRight = $('.tomatoRight');
var $tomatoLeaves = $('.tomatoLeaves');
//endregion
//region Animation Configuration
var duration = 1;
//endregion
//region SVG animations
var tl = new TimelineLite();
tl
    .set($bracketLeft, {
    //alpha: 0,
    xPercent: -200
})
    .set($bracketRight, {
    //alpha: 0,
    xPercent: 200
})
    .set($tomato, {
    //alpha: 0,
    yPercent: -200,
    xPercent: 2,
    rotation: 13,
    transformOrigin: 'center center'
})
    .set($tomatoLeft, {
    xPercent: 23.6
})
    .set($tomatoLeaves, {
    xPercent: 41
})
    .to([$bracketLeft, $bracketRight], duration, {
    xPercent: 0,
    ease: Power4.easeOut
})
    .to($tomato, duration, {
    yPercent: 0,
    ease: Bounce.easeOut
})
    .to($tomato, 0.2, {
    rotation: 0,
    xPercent: -4
})
    .to([$tomatoLeft, $tomatoLeaves], 0.2, {
    xPercent: 0,
    ease: Linear.easeOut
}, 'cut-tomato')
    .to($tomato, 0.2, {
    rotation: 0,
    xPercent: 0
}, 'cut-tomato')
    .to($tomatoRight, 0.2, {
    xPercent: 2
}, 'cut-tomato');
//endregion
console.log('animation done');
//# sourceMappingURL=main.js.map