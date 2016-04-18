"use strict";
/// <reference path="../../typings/main/ambient/TweenMax/TweenMax.d.ts" />
/// <reference path="../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
require('TweenLite');
require('CSSPlugin');
var TimelineLite = require('TimelineLite');
//region JavaScript Element Selectors
var box = document.getElementsByClassName('box');
var boxSVG = document.getElementById('boxSVG');
var boxHTML = document.getElementById('boxHTML');
var htmlDot = document.getElementById('htmlDOT');
var svgDot = document.getElementById('svgcircle');
//endregion
//region Main Timeline
var tl = new TimelineLite({ paused: true });
tl
    .to(boxHTML, 0.7, { x: '100%', y: '100%', ease: Power2.easeInOut })
    .to(boxSVG, 0.7, { x: '100%', y: '100%', ease: Power2.easeInOut })
    .addPause()
    .to(boxHTML, 0.7, { left: '50%', top: '50%', ease: Power2.easeInOut }) //50% of the whole viewport size
    .to(boxSVG, 0.7, { left: '50%', top: '50%', ease: Power2.easeInOut })
    .addPause()
    .to(boxHTML, 0.7, { left: '50%', top: '50%', x: '-50%', y: '-50%', ease: Power2.easeInOut }) //50% of the whole viewport size
    .to(htmlDot, 0.7, { left: '0', top: '0', ease: Power2.easeInOut })
    .addPause()
    .to(boxSVG, 0.7, { left: '50%', top: '50%', x: '-50%', y: '-50%', ease: Power2.easeInOut }) //50% of the whole viewport size
    .to(svgDot, 0.7, { attr: { cx: 0, cy: 0 }, ease: Power2.easeInOut })
    .addPause();
//endregion
//region Botton Next
var btnNext = document.getElementById('btnNext');
var btnPrev = document.getElementById('btnPrev');
//endregion
//region Botton Next
btnNext.onclick = function () {
    console.log('Play Next');
    console.log(boxHTML);
    console.log(tl);
    tl.play();
};
btnPrev.onclick = function () {
    tl.reverse();
};
//endregion
//# sourceMappingURL=main.js.map