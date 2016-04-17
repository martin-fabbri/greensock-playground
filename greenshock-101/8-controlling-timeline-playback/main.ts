/// <reference path="../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
import * as TweenLite from 'TweenLite';
import * as TimelineLite from 'TimelineLite';
import 'CSSPlugin';

//region JavaScript Element Selectors
const img = document.getElementsByTagName('img');
const h2 = document.getElementsByTagName('h2');
const h1 = document.getElementsByTagName('h1');
const intro = document.getElementsByClassName('intro');
const listItemUl = document.getElementsByTagName('ul');
const listItemLi = document.getElementsByTagName('li');
//endregion

//region Playback buttons
const playButton = document.getElementById('btnPlay');
const pauseButton = document.getElementById('btnPause');
const resumeButton = document.getElementById('btnResume');
const reverseButton = document.getElementById('btnReverse');
const speedUpButton = document.getElementById('btnSpeedUp');
const slowDownButton = document.getElementById('btnSlowDown');
const seeek1secButton = document.getElementById('btnSeek');
const goTo50PercentButton = document.getElementById('btnProgress');
const restartButton = document.getElementById('btnRestart');
//endregion

const tl = new TimelineLite();
tl
    .from(h1, 1, {y: -15, autoAlpha: 0, ease: Power1.easeOut})
    .add('intro')
    .from(intro, 1, {y: -15, autoAlpha: 0, ease: Power1.easeOut})
    .from(img, 1, {y: -15, autoAlpha: 0, ease: Power1.easeOut})
    .from(h2, 1, {y: -15, autoAlpha: 0, ease: Power1.easeOut}, 'intro')
    .from(listItemUl, 1, {y: -15, autoAlpha: 0, ease: Power1.easeOut}, 'intro+=3')
    .from(listItemLi, 1, {y: -15, autoAlpha: 0, ease: Power1.easeOut}, 'intro+=3');

playButton.onclick = ()=> {
    tl.play();
};

pauseButton.onclick = ()=> {
    tl.pause();
};

resumeButton.onclick = ()=> {
    tl.resume();
};

reverseButton.onclick = ()=> {
    tl.reverse();
};

speedUpButton.onclick = ()=> {
    tl.timeScale(8);
};

slowDownButton.onclick = ()=> {
    tl.timeScale(0.5);
};

seeek1secButton.onclick = ()=> {
    //tl.seek(1);   //absolute time in the animation
    tl.seek('intro'); //specific label
};

goTo50PercentButton.onclick = ()=> {
    tl.progress(0.5);
};

restartButton.onclick = ()=> {
    tl.restart();
};
