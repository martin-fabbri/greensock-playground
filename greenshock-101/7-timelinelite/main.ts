/// <reference path="../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
import * as TweenLite from 'TweenLite';
import * as TimelineLite from 'TimelineLite';
import 'CSSPlugin';

// TweenLite.from('h1', 0.5, {left: 100, autoAlpha: 0});
// TweenLite.from('h2', 0.5, {left: -100, autoAlpha: 0, delay: 0.25});
// TweenLite.from('#feature', 0.5, {scale: 0.5, autoAlpha: 0, delay: 1});
// TweenLite.from('#description', 0.5, {left: 100, autoAlpha: 0, delay: 1.5});
// TweenLite.from('#nav img', 0.5, {scale: 0, autoAlpha: 0, delay: 2.0});

const tl = new TimelineLite();

tl
    .from('h1', 0.5, {left: 100, autoAlpha: 0})
    .from('h2', 0.5, {left: -100, autoAlpha: 0}, 0) // it has an absolute position of zero
    .from('#feature', 0.5, {scale: 0.5, autoAlpha: 0}, 'feature')
    .from('#description', 0.5, {left: 100, autoAlpha: 0}, 'feature+=0.25')
    .from('#nav img', 0.5, {scale: 0, rotation: -180, autoAlpha: 0}, 'stagger');

//tl.seek('stagger');

//tl.timeScale(4);   // fast speed animation
//tl.timeScale(0.5);   // normal speed animation

//region Animation Option Selectors
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const reverseButton = document.getElementById('reverse');
const resumeButton = document.getElementById('resume');
const restartButton = document.getElementById('restart');

//endregion

//region Animation Controls

playButton.onclick = ()=> {
    console.log('timeline play()', tl);
    // play() only plays forward from current position. If timeline has finished, play() has nowhere to go.
    // if the timeline is no done then play() or else restart() (restart always restart from beginning).
    if (tl.progress() != 1) {
        tl.play();
    } else {
        tl.restart();
    }
};

pauseButton.onclick = ()=> {
    tl.pause();
};

reverseButton.onclick = ()=> {
    tl.reverse();
};

resumeButton.onclick = ()=> {
    tl.resume();
};

restartButton.onclick = ()=> {
    tl.restart();
};





//endregion




