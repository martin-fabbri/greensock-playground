"use strict";
var TimelineMax = require('TimelineMax');
require('CSSPlugin');
require('EasePack');
//region JavaScript Element Selectors
var img = document.getElementsByTagName('img');
var h2 = document.getElementsByTagName('h2');
var h1 = document.getElementsByTagName('h1');
var intro = document.getElementsByClassName('intro');
var listItemUl = document.getElementsByTagName('ul');
var listItemLi = document.getElementsByTagName('li');
//endregion
//region JavaScript Element Selectors
var dot = document.getElementsByClassName('dot');
var loader = document.getElementById('loader');
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
var buttons = document.getElementsByTagName('button');
//endregion
var loadContent = function () {
    console.log('Bring on the content');
    tl.play();
};
var tl = new TimelineLite({ paused: true });
tl
    .from(h1, 1, { y: -15, autoAlpha: 0, ease: Power1.easeOut })
    .add('intro')
    .from(intro, 1, { y: -15, autoAlpha: 0, ease: Power1.easeOut })
    .from(img, 1, { y: -15, autoAlpha: 0, ease: Power1.easeOut })
    .from(h2, 1, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, 'intro')
    .from(listItemUl, 1, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, 'intro+=3')
    .from(listItemLi, 1, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, 'intro+=3')
    .staggerFrom(buttons, 0.2, {
    //x: 200,
    cycle: {
        x: [50, -50],
        scale: [2, 0.5]
    },
    ease: Power1.easeOut,
    autoAlpha: 0
}, 0.1);
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
//region Loader Timeline
var tlLoader = new TimelineMax({ repeat: 2, onComplete: loadContent });
tlLoader
    .staggerFromTo(dot, 0.3, { y: 0, autoAlpha: 0 }, { y: 20, autoAlpha: 1, ease: Back.easeInOut }, 0.05)
    .fromTo(loader, 0.3, { autoAlpha: 1, scale: 1.3 }, { autoAlpha: 0, scale: 1, ease: Power0.easeOut }, 0.9);
//endregion
//# sourceMappingURL=main.js.map