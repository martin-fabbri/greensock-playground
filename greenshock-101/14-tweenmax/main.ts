/// <reference path="../../typings/main/ambient/TweenMax/TweenMax.d.ts" />
/// <reference path="../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
import 'TweenLite';
import 'CSSPlugin';
import * as TweenMax from 'TweenMax';
import * as TimelineLite from 'TimelineLite';

//region JavaScript Element Selectors
const box = document.getElementsByClassName('box');
const boxSVG = document.getElementById('boxSVG');
const boxHTML = document.getElementById('boxHTML');
const htmlDot = document.getElementById('htmlDOT');
const svgDot = document.getElementById('svgcircle');
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
    .to(svgDot, 0.7, {attr: {cx: 0, cy:0}, ease:Power2.easeInOut})
    .addPause()
;

//endregion

//region Botton Next
const btnNext = document.getElementById('btnNext');
const btnPrev = document.getElementById('btnPrev');
//endregion

//region Botton Next
btnNext.onclick = ()=> {
    console.log('Play Next');
    console.log(boxHTML);
    console.log(tl);
    tl.play();
}

btnPrev.onclick = ()=> {
    tl.reverse();
}
//endregion
