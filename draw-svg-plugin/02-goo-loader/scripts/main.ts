/// <reference path="../../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../../typings/main/ambient/TimelineMax/TimelineMax.d.ts" />
/// <reference path="../../../typings/main/ambient/jquery/index.d.ts" />
import * as $ from 'jquery';
import * as TimelineMax from 'TimelineMax';
import 'CSSPlugin';
import 'EasePack';
import 'DrawSVGPlugin';
import 'AttrPlugin';

//region Element Selectors
const $container = $('.container');
const $drop = $('#drop');
const $drop2 = $('#drop2');
const $outline = $('#outline');
const $svg = $('svg');

//region Animation Config
const infiniteRepeatLoop = -1;
//endregion



//region Timeline Setup

const jumpTl = new TimelineMax({
    repeat: infiniteRepeatLoop,
    paused: false,
    repeatDelay: 0,
    immediateRender: false
});

jumpTl
    .set([$container, $svg], {
        position: 'absolute',
        top: '50%',
        left: '50%',
        xPercent: -50,
        yPercent: -50
    })
    .set($drop, {
        transformOrigin: '50% 50%'
    })
    .to($drop, 4, {
        attr: {
            cx: 250,
            rx: '+=10',
            ry: '+=10'
        },
        ease: Back.easeInOut.config(3)
    })
    .to($drop2, 4, {
        attr: {
            cx: 250
        },
        ease: Power1.easeInOut
    }, '-=4')
    .to($drop, 4, {
        attr: {
            cx: 125,
            rx: '-=10',
            ry: '-=10'
        },
        ease: Back.easeInOut.config(3)
    })
    .to($drop2, 4, {
        attr: {
            cx: 125,
            rx: '-=10',
            ry: '-=10'
        },
        ease: Power1.easeInOut
    }, '-=4')
    .timeScale(3)
;

//endregion
