/// <reference path="../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
import * as TweenLite from 'TweenLite';
import * as TimelineLite from 'TimelineLite';
import 'CSSPlugin';

//region Relative Position
const tl = new TimelineLite({paused: true});

tl
    .to('#green', 2, {x: 600})
    .to('#blue', 0.5, {x: 600}, '-=1')
    .to('#red', 1, {x: 600}, '+=1');

//region Playback buttons
const playButton = document.getElementById('play');
const restartButton = document.getElementById('restart');
//endregion

playButton.onclick = () => {
    tl.play();
}

restartButton.onclick = () => {
    tl.restart();
}

//endregion


//region Absolute Position
const absoluteTl = new TimelineLite({paused: true});

absoluteTl
    .to('#absoluteGreen', 1, {x: 600})
    .add('blueGreenSpin', '+=1')
    .to('#absoluteBlue', 1, {x: 600, rotation: 360}, 'blueGreenSpin')
    .to('#absoluteRed', 1, {x: 600}, 1);

//region Playback buttons
const absolutePlayButton = document.getElementById('absolutePlay');
const absoluteRestartButton = document.getElementById('absoluteRestart');
//endregion

absolutePlayButton.onclick = () => {
    absoluteTl.play();
}

absoluteRestartButton.onclick = () => {
    absoluteTl.restart();
}
//endregion