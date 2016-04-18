/// <reference path="../../typings/main/ambient/TweenMax/TweenMax.d.ts" />
/// <reference path="../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
/// <reference path="../../typings/main/ambient/jquery/index.d.ts" />
import 'TweenLite';
import 'CSSPlugin';
import 'AttrPlugin';
import * as TweenMax from 'TweenMax';
import * as TimelineLite from 'TimelineLite';
import * as $ from 'jquery';

//region JavaScript Element Selectors
const box = document.getElementsByClassName('box');
const boxSVG = document.getElementById('boxSVG');
const boxHTML = document.getElementById('boxHTML');
const htmlDot = document.getElementById('htmlDOT');
const svgDot = $('#boxSVG .circ');
//endregion

//region Main Timeline
const tl = new TimelineLite({paused: true});
tl
    .to(boxHTML, 0.7, {x: '100%', y: '100%', ease:Power2.easeInOut})
    .to(boxSVG, 0.7, {x: '100%', y: '100%', ease:Power2.easeInOut})
    .addPause()
    .to(boxHTML, 0.7, {left: '50%', top: '50%', ease:Power2.easeInOut})    //50% of the whole viewport size
    .to(boxSVG, 0.7, {left: '50%', top: '50%', ease:Power2.easeInOut})
    .addPause()
    .to(boxHTML, 0.7, {left: '50%', top: '50%', x: '-50%', y: '-50%', ease:Power2.easeInOut})    //50% of the whole viewport size
    .to(htmlDot, 0.7, {left: '0', top: '0', ease:Power2.easeInOut})
    .addPause()
    .to(boxSVG, 0.7, {left: '50%', top: '50%', x: '-50%', y: '-50%', ease:Power2.easeInOut})    //50% of the whole viewport size
    .to(svgDot, 0.7, {attr:{cx: 0, cy: 0}, ease:Power2.easeInOut})
    .addPause()
    .to(boxHTML, 0.7, {rotation: 90, transformOrigin: '100% 100%', ease:Power2.easeInOut})
    .addPause()
    .to(boxSVG, 0.7, {rotation: 90, transformOrigin: '100% 100%', ease:Power2.easeInOut})
    .addPause()
    .to(boxHTML, 0.7, {xPercent: -100, rotation: 0, ease:Power2.easeInOut})
    .addPause()
    .to(boxSVG, 0.7, {x: '0%', rotation: 0, ease:Power2.easeInOut})
    .addPause()
    .to(htmlDot, 0.7, {left: '50%', top: '50%', ease:Power2.easeInOut})
    .to(svgDot, 0.7, {attr:{cx: 100, cy: 100}, ease:Power2.easeInOut}, '-=0.7')
    .addPause()
    .to([boxHTML, boxSVG], 0.7, {rotation: 720, transformOrigin: '50% 50%', ease:Power2.easeInOut})
    .addPause()
    .to(boxHTML, 0.7, {rotationX: -180, transformOrigin: '0% 50%', ease:Power2.easeInOut})
    .to(boxSVG, 0.7, {rotationY: -180, transformOrigin: '100% 50%', ease:Power2.easeInOut})
    .addPause()
    .to(boxHTML, 0.7, {rotationX: -360, ease:Power2.easeInOut})
    .to(boxSVG, 0.7, {rotationY: -360, ease:Power2.easeInOut})
;

//endregion

//region Botton Next
const btnNext = document.getElementById('btnNext');
const btnPrev = document.getElementById('btnPrev');
//endregion

//region Botton Next
btnNext.onclick = ()=> {
    tl.play();
}

btnPrev.onclick = ()=> {
    tl.reverse();
}
//endregion
