/// <reference path="../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
/// <reference path="../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../typings/main/ambient/jquery/index.d.ts" />

import * as TweenLite from 'TweenLite';
import 'CSSPlugin';
import * as TimelineLite from 'TimelineLite';
import * as $ from 'jquery';

//region Animation Elements Selection
const $activeSlide = $('.active');
const $homeSlide = $('.homeSlide');
const $slideNavPrev = $('.slideNavPrev');
const $slideNavNext = $('.slideNavNext');
const $slideNavPrevA = $('.slideNavPrev a');
const $slideNavNextA = $('.slideNavNext a');
const $hero = $('.hero');
//endregion


//region Navigation Events

const goToNextSlide = ($slideOut: JQuery, $slideIn: JQuery)=> {
    const tl = new TimelineLite();

    const $slideOutH1 = $slideOut.find('h1');
    const $slideOutP = $slideOut.find('p');
    const $slideInH1 = $slideIn.find('h1');
    const $slideInP = $slideIn.find('p');

    tl
        .set($slideIn, {y: '100%', autoAlpha: 1, className: '+=active'})
        .set($slideOut, {className: '-=active'})
        .to($slideOut, 0.5, {y: '-100%', ease: Power3.easeInOut}, 0)
        .to($slideIn, 0.5, {y: '-=100%', ease: Power3.easeInOut}, 0);
};

$slideNavNext.click((e)=> {
    e.preventDefault();
    const $slideOut = $('.homeSlide.active');
    const $slideIn = $slideOut.next();
    goToNextSlide($slideOut, $slideIn);
});
//endregion

const initTl = new TimelineLite({paused: true});
initTl
    //hide all the slides except the active one
    .set($homeSlide.not($activeSlide), {autoAlpha: 0})
    //disable arrow down on pageload
    .set($slideNavPrev, {autoAlpha: 0.2});





initTl.play();