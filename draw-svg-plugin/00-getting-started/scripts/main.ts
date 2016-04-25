/// <reference path="../../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
/// <reference path="../../../typings/main/ambient/jquery/index.d.ts" />
import * as $ from 'jquery';
import * as TimelineLite from 'TimelineLite';
import 'CSSPlugin';
import 'EasePack';
import 'DrawSVGPlugin';

//region Element Selectors
const $path = $('#path');
const $circle = $('circle');
const $ellipse = $('ellipse');
const $rect = $('rect');
const $polyline = $('polyline');

//region Animation Config
const duration = 1;
const infiniteRepeatLoop = -1;
//endregion


//region Timeline Setup
const curbTl = new TimelineLite();

curbTl
    .set('circle', {stroke: 'red', strokeWidth: 6})
    .fromTo($path, duration,
        {drawSVG: '0% 10%'},
        {drawSVG: '90% 100%', delay: 0.5, ease: Bounce.easeOut}
    )
    .from($circle, duration, {drawSVG: 0})
    .from($ellipse, duration, {drawSVG: 0})
    .from($rect, duration, {drawSVG: 0})
    .from($polyline, duration, {drawSVG: 0})
    // .from($path, duration, {
    //     drawSVG: '50% 50%',
    //     delay: 0.5
    // })
;

//endregion
