"use strict";
/// <reference path="../../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
/// <reference path="../../../typings/main/ambient/jquery/index.d.ts" />
var $ = require('jquery');
var TimelineLite = require('TimelineLite');
require('CSSPlugin');
require('EasePack');
//region Element Selectors
var $robust = $('#robust');
var $overwrite = $('#overwrite');
var $compatible = $('#compatible');
var $support = $('#support');
var $header = $('h1');
//buttons
var $startBtn = $('#start');
var $pauseBtn = $('#pause');
var $restartBtn = $('#restart');
var $reverseBtn = $('#reverse');
//endregion
//region Animation Config
var duration = 0.5;
var pausedOnStart = true;
var easingElastic = Elastic.easeInOut;
var easingBounce = Bounce.easeInOut;
var easingBack = Back.easeInOut;
var easingLinear = Linear.easeInOut;
//endregion
//region Timeline Setup
var toolTimeline = new TimelineLite({ paused: pausedOnStart });
toolTimeline
    .to($robust, duration, { y: -30, ease: easingElastic })
    .to($overwrite, duration, { y: -30, ease: easingBounce })
    .to($compatible, duration, { y: -30, ease: easingBack })
    .to($support, duration, { y: -30, ease: easingLinear });
//endregion
//region Playback Actions
var startAction = function () {
    toolTimeline.play();
};
var pauseAction = function () {
    toolTimeline.pause();
};
var restartAction = function () {
    toolTimeline.restart();
};
var reverseAction = function () {
    toolTimeline.reverse();
};
//event listerners
$startBtn.on('click', startAction);
$pauseBtn.on('click', pauseAction);
$restartBtn.on('click', restartAction);
$reverseBtn.on('click', reverseAction);
//endregion
//# sourceMappingURL=main.js.map