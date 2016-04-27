/// <reference path="../../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../../typings/main/ambient/TweenMax/TweenMax.d.ts" />
/// <reference path="../../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
/// <reference path="../../../typings/main/ambient/jquery/index.d.ts" />
import * as $ from 'jquery';
import * as TimelineLite from 'TimelineLite';
import 'CSSPlugin';
import 'EasePack';
import 'DrawSVGPlugin';
import 'AttrPlugin';
import 'MorphSVGPlugin';

//region Element Selectors
const $bracketLeft = $('.bracketLeft');
const $bracketRight = $('.bracketRight');
const $tomato = $('#tomato');
const $tomatoLeft = $('.tomatoLeft');
const $tomatoRight = $('.tomatoRight');
const $tomatoLeaves = $('.tomatoLeaves');
//endregion

//region Animation Configuration
const duration = 1;
//endregion

//region SVG animations
const tl = new TimelineLite();

tl
    .set($bracketLeft, {
        //alpha: 0,
        xPercent: -200
    })
    .set($bracketRight, {
        //alpha: 0,
        xPercent: 200
    })
    .set($tomato, {
        //alpha: 0,
        yPercent: -200,
        xPercent: 2,
        rotation: 13,
        transformOrigin: 'center center'
    })
    .set($tomatoLeft, {
        xPercent: 23.6
    })
    .set($tomatoLeaves, {
        xPercent: 41
    })
    //brackets
    .to([$bracketLeft, $bracketRight], duration, {
        xPercent: 0,
        ease: Power4.easeOut
    })
    .to($tomato, duration, {
        yPercent: 0,
        ease: Bounce.easeOut
    })
    .to($tomato, 0.2, {
        rotation: 0,
        xPercent: -4
    })
    .to([$tomatoLeft, $tomatoLeaves], 0.2, {
        xPercent: 0,
        ease: Linear.easeOut
    }, 'cut-tomato')
    .to($tomato, 0.2, {
        rotation: 0,
        xPercent: 0
    }, 'cut-tomato')
    .to($tomatoRight, 0.2, {
        xPercent: 2
    }, 'cut-tomato')
;



//endregion
console.log('animation done');
