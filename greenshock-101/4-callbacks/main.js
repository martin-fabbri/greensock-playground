"use strict";
/// <reference path="../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
var TweenLite = require('TweenLite');
require('CSSPlugin');
//region JQuery Element Selectors
var img = document.getElementsByTagName('img');
var h2 = document.getElementsByTagName('h2');
//endregion
var onStart = function () {
    console.log('Animation start!');
};
var onUpdate = function () {
    console.log('Animation is in progress');
};
var onComplete = function () {
    console.log('Animation completed');
};
TweenLite.from(img, 1, {
    x: -200,
    ease: Power1.easeInOut,
    onStart: onStart,
    onUpdate: onUpdate,
    onComplete: onComplete
});
//# sourceMappingURL=main.js.map