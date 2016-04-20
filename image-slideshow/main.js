/// <reference path="../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
/// <reference path="../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../typings/main/ambient/jquery/index.d.ts" />
"use strict";
require('CSSPlugin');
var TimelineLite = require('TimelineLite');
var $ = require('jquery');
//region Animation Elements Selection
var $activeSlide = $('.active');
var $homeSlide = $('.homeSlide');
var $slideNavPrev = $('.slideNavPrev');
var $slideNavNext = $('.slideNavNext');
var $slideNavPrevA = $('.slideNavPrev a');
var $slideNavNextA = $('.slideNavNext a');
var $hero = $('.hero');
//endregion
//region Navigation Events
var goToNextSlide = function ($slideOut, $slideIn) {
    var tl = new TimelineLite();
    var $slideOutH1 = $slideOut.find('h1');
    var $slideOutP = $slideOut.find('p');
    var $slideInH1 = $slideIn.find('h1');
    var $slideInP = $slideIn.find('p');
    tl
        .set($slideIn, { y: '100%', autoAlpha: 1, className: '+=active' })
        .set($slideOut, { className: '-=active' })
        .to($slideOut, 0.5, { y: '-100%', ease: Power3.easeInOut }, 0)
        .to($slideIn, 0.5, { y: '-=100%', ease: Power3.easeInOut }, 0);
};
$slideNavNext.click(function (e) {
    e.preventDefault();
    var $slideOut = $('.homeSlide.active');
    var $slideIn = $slideOut.next();
    goToNextSlide($slideOut, $slideIn);
});
//endregion
var initTl = new TimelineLite({ paused: true });
initTl
    .set($homeSlide.not($activeSlide), { autoAlpha: 0 })
    .set($slideNavPrev, { autoAlpha: 0.2 });
initTl.play();
//# sourceMappingURL=main.js.map