"use strict";
var TimelineLite = require('TimelineLite');
require('CSSPlugin');
//region Element Selectors
var man = document.getElementById("man");
var car = document.getElementById("car");
var lift = document.getElementById("lift");
var restart = document.getElementById("restart");
//endregion
var tl = new TimelineLite();
//Challenge requirements:
//Man should begin animating 1 second before car animation ends.
//One second after man animation ends both car and lift should go up simultaneously.
tl
    .to(car, 2, { x: 445 })
    .to(man, 1, { x: -150 }, '-=1')
    .add('lift')
    .to(car, 1, { y: "-=160" }, 'lift')
    .to(lift, 1, { y: "-=160" }, 'lift');
restart.onclick = function () {
    tl.restart();
};
//to see how this should look when done, here are some files
// .mov: http://greensock.com/wp-content/uploads/custom/position-challenge/position-challenge.mov
// .gif: http://greensock.com/wp-content/uploads/custom/position-challenge/position-challenge.gif
//# sourceMappingURL=main.js.map