/// <reference path="../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
import * as TweenLite from 'TweenLite';
import * as TimelineLite from 'TimelineLite';
import 'CSSPlugin';
import 'EasePack';

// logo1 animation
TweenLite.to('#logo1', 6, {
    x: 600,
    rotation: 360,
    scale: 0.5,
    ease: Back.easeOut
});

// logo2 animation
TweenLite.to('#logo2', 2, {
    x: 300,
    ease: Back.easeOut
});

// logo3 animation
TweenLite.to('#logo3', 2, {
    x: 300,
    ease: Elastic.easeOut
});

// logo4 animation
TweenLite.to('#logo4', 2, {
    x: 300,
    ease: Bounce.easeOut
});





