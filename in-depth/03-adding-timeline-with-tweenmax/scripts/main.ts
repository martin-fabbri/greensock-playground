/// <reference path="../../../typings/main/ambient/TweenMax/TweenMax.d.ts" />
/// <reference path="../../../typings/main/ambient/TimelineMax/TimelineMax.d.ts" />
/// <reference path="../../../typings/main/ambient/jquery/index.d.ts" />
import * as $ from 'jquery';
import * as TweenMax from 'TweenMax';
import * as TimelineMax from 'TimelineMax';
import 'CSSPlugin';
import 'EasePack';


//region Element Selectors
const $robust = $('#robust');
const $overwrite = $('#overwrite');
const $compatible = $('#compatible');
const $support = $('#support');
const $description = $('#description');

const $header = $('h1');
const $subTitle = $('h2');
const $icon = $('#info img');
const $tools = $('.tool');

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
const toolTimeline = new TimelineMax({paused: pausedOnStart});
toolTimeline
    .from($header, duration, {opacity: 0, scale: 25, ease: Linear.easeInOut}, 'intro')
    .from($subTitle, duration, {opacity: 0, scale: 25, ease: Linear.easeInOut}, 'intro')
    .from($description, duration, {opacity: 0, scale: 25, ease: Linear.easeInOut}, '+=0.2')
    .from($icon, duration, {left: -275, ease: Back.easeInOut}, 'icon')
    .from($icon, duration, {skewX: '20deg', ease: Back.easeInOut})
    .to($description, duration, {left: 25, ease: Back.easeInOut})
    .staggerTo($tools, duration, {top: -20, ease: Back.easeInOut}, 0.2);
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

$(window).load(()=> {
    console.log('window load event');
    console.log('$icon', $icon);
    toolTimeline.play();
});