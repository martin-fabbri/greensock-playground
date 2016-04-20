"use strict";
/// <reference path="../../../typings/main/ambient/TweenMax/TweenMax.d.ts" />
/// <reference path="../../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
/// <reference path="../../../typings/main/ambient/jquery/index.d.ts" />
var $ = require('jquery');
var TweenLite = require('TweenLite');
require('CSSPlugin');
//region Element Selectors
var $robust = $('#robust');
var $header = $('h1');
//endregion
//region Animations
var startTween = function () {
    TweenLite.to($robust, 1, {
        x: 200,
        y: 225,
        //rotation: 90,
        //rotationX: 180,
        rotationY: 180,
        alpha: 0.2,
        //height: 200
        scale: 4,
        onComplete: returnToNormal
    });
    TweenLite.to($header, 1, {
        color: '#ff0000',
        fontSize: '+=10'
    });
};
var returnToNormal = function () {
    TweenLite.to($robust, 1, {
        x: 0,
        y: 0,
        //rotation: 90,
        //rotationX: 180,
        rotationY: 0,
        alpha: 1,
        //height: 200
        scale: 1
    });
};
//endregion
startTween();
//# sourceMappingURL=main.js.map