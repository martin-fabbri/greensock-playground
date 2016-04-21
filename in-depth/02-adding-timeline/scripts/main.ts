/// <reference path="../../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
/// <reference path="../../../typings/main/ambient/jquery/index.d.ts" />
import * as $ from 'jquery';
import * as TimelineLite from 'TimelineLite';
import 'CSSPlugin';
import 'EasePack';

//region Element Selectors
const $robust = $('#robust');
const $overwrite = $('#overwrite');
const $compatible = $('#compatible');
const $support = $('#support');

const $header = $('h1');

//buttons
const $startBtn = $('#start');
const $pauseBtn = $('#pause');
const $restartBtn = $('#restart');
const $reverseBtn = $('#reverse');

//endregion

//region Animation Config
const duration = 0.5;
const pausedOnStart = true;
const easingElastic = Elastic.easeInOut;
const easingBounce = Bounce.easeInOut;
const easingBack = Back.easeInOut;
const easingLinear = Linear.easeInOut;
//endregion

//region Timeline Setup
const toolTimeline = new TimelineLite({paused: pausedOnStart});
toolTimeline
    .to($robust, duration, {y: -30, ease: easingElastic})
    .to($overwrite, duration, {y: -30, ease: easingBounce})
    .to($compatible, duration, {y: -30, ease: easingBack})
    .to($support, duration, {y: -30, ease: easingLinear});
//endregion


//region Playback Actions
const startAction = ()=> {
    toolTimeline.play();
};

const pauseAction = ()=> {
    toolTimeline.pause();
};

const restartAction = ()=> {
    toolTimeline.restart();
};

const reverseAction = ()=> {
    toolTimeline.reverse();
};

//event listerners
$startBtn.on('click', startAction);
$pauseBtn.on('click', pauseAction);
$restartBtn.on('click', restartAction);
$reverseBtn.on('click', reverseAction);

//endregion

