/// <reference path="../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
import * as TweenLite from 'TweenLite';
import * as TimelineLite from 'TimelineLite';
import 'CSSPlugin';

//region Element Selectors
const man = document.getElementById("man");
const car = document.getElementById("car");
const lift =  document.getElementById("lift");
const restart = document.getElementById("restart");
//endregion

const tl = new TimelineLite();

//Challenge requirements:
//Man should begin animating 1 second before car animation ends.
//One second after man animation ends both car and lift should go up simultaneously.

tl
    .to(car, 2, {x:445})
    .to(man, 1, {x:-150}, '-=1')
    .add('lift')
    .to(car, 1, {y:"-=160"}, 'lift')
    .to(lift, 1, {y:"-=160"}, 'lift');

restart.onclick = ()=> {
    tl.restart();
}

//to see how this should look when done, here are some files

// .mov: http://greensock.com/wp-content/uploads/custom/position-challenge/position-challenge.mov
// .gif: http://greensock.com/wp-content/uploads/custom/position-challenge/position-challenge.gif
