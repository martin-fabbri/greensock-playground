"use strict";
/// <reference path="../../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../../typings/main/ambient/TimelineMax/TimelineMax.d.ts" />
/// <reference path="../../../typings/main/ambient/jquery/index.d.ts" />
var $ = require('jquery');
var TimelineMax = require('TimelineMax');
require('CSSPlugin');
require('EasePack');
require('DrawSVGPlugin');
require('AttrPlugin');
//region Element Selectors
var $container = $('.container');
var $loader = $('#loader');
var $circleL = $('#circleL');
var $circleR = $('#circleR');
var $jump = $('#jump');
var $jumpRef = $jump.clone();
$loader.append($jumpRef);
//region Animation Config
var duration = 0.5;
var infiniteRepeatLoop = -1;
//endregion
//region Timeline Setup
var jumpTl = new TimelineMax({ repeat: infiniteRepeatLoop });
jumpTl
    .set([$container, $loader], {
    position: 'absolute',
    top: '50%',
    left: '50%',
    xPercent: -50,
    yPercent: -50
})
    .set($jumpRef, {
    transformOrigin: '50% 110%',
    scaleY: -1,
    alpha: 0.05
})
    .set([$jump, $jumpRef], {
    drawSVG: '0% 0%'
})
    .set([$circleL, $circleR], {
    attr: {
        rx: 0,
        ry: 0
    }
})
    .to([$jump, $jumpRef], 0.4, {
    drawSVG: '0% 30%',
    ease: Linear.easeNone
})
    .to($circleL, 2, {
    attr: {
        rx: '+=30',
        ry: '+=10'
    },
    alpha: 0,
    ease: Power1.easeOut
}, '-=0.1')
    .to([$jump, $jumpRef], 1, {
    drawSVG: '50% 80%',
    ease: Linear.easeNone
}, '-=1.9')
    .to([$jump, $jumpRef], 0.7, {
    drawSVG: '100% 100%',
    ease: Linear.easeNone
}, '-=0.9')
    .to($circleR, 2, {
    attr: {
        rx: '+=30',
        ry: '+=10'
    },
    alpha: 0,
    ease: Power1.easeOut
}, '-=0.5')
    .timeScale(3);
//endregion
//# sourceMappingURL=main.js.map