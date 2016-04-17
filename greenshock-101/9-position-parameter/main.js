"use strict";
var TimelineLite = require('TimelineLite');
require('CSSPlugin');
//region Relative Position
var tl = new TimelineLite({ paused: true });
tl
    .to('#green', 2, { x: 600 })
    .to('#blue', 0.5, { x: 600 }, '-=1')
    .to('#red', 1, { x: 600 }, '+=1');
//region Playback buttons
var playButton = document.getElementById('play');
var restartButton = document.getElementById('restart');
//endregion
playButton.onclick = function () {
    tl.play();
};
restartButton.onclick = function () {
    tl.restart();
};
//endregion
//region Absolute Position
var absoluteTl = new TimelineLite({ paused: true });
absoluteTl
    .to('#absoluteGreen', 1, { x: 600 })
    .add('blueGreenSpin', '+=1')
    .to('#absoluteBlue', 1, { x: 600, rotation: 360 }, 'blueGreenSpin')
    .to('#absoluteRed', 1, { x: 600 }, 1);
//region Playback buttons
var absolutePlayButton = document.getElementById('absolutePlay');
var absoluteRestartButton = document.getElementById('absoluteRestart');
//endregion
absolutePlayButton.onclick = function () {
    absoluteTl.play();
};
absoluteRestartButton.onclick = function () {
    absoluteTl.restart();
};
//endregion 
//# sourceMappingURL=main.js.map