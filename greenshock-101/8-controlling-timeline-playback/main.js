"use strict";
var TimelineLite = require('TimelineLite');
require('CSSPlugin');
//region JavaScript Element Selectors
var img = document.getElementsByTagName('img');
var h2 = document.getElementsByTagName('h2');
var h1 = document.getElementsByTagName('h1');
var intro = document.getElementsByClassName('intro');
var listItemUl = document.getElementsByTagName('ul');
var listItemLi = document.getElementsByTagName('li');
//endregion
//region Playback buttons
var playButton = document.getElementById('btnPlay');
var pauseButton = document.getElementById('btnPause');
var resumeButton = document.getElementById('btnResume');
var reverseButton = document.getElementById('btnReverse');
var speedUpButton = document.getElementById('btnSpeedUp');
var slowDownButton = document.getElementById('btnSlowDown');
var seeek1secButton = document.getElementById('btnSeek');
var goTo50PercentButton = document.getElementById('btnProgress');
var restartButton = document.getElementById('btnRestart');
//endregion
var tl = new TimelineLite();
tl
    .from(h1, 1, { y: -15, autoAlpha: 0, ease: Power1.easeOut })
    .add('intro')
    .from(intro, 1, { y: -15, autoAlpha: 0, ease: Power1.easeOut })
    .from(img, 1, { y: -15, autoAlpha: 0, ease: Power1.easeOut })
    .from(h2, 1, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, 'intro')
    .from(listItemUl, 1, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, 'intro+=3')
    .from(listItemLi, 1, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, 'intro+=3');
playButton.onclick = function () {
    tl.play();
};
pauseButton.onclick = function () {
    tl.pause();
};
resumeButton.onclick = function () {
    tl.resume();
};
reverseButton.onclick = function () {
    tl.reverse();
};
speedUpButton.onclick = function () {
    tl.timeScale(8);
};
slowDownButton.onclick = function () {
    tl.timeScale(0.5);
};
seeek1secButton.onclick = function () {
    //tl.seek(1);   //absolute time in the animation
    tl.seek('intro'); //specific label
};
goTo50PercentButton.onclick = function () {
    tl.progress(0.5);
};
restartButton.onclick = function () {
    tl.restart();
};
//# sourceMappingURL=main.js.map