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
console.log('intro', intro);
//region Individual animation without timeline
// TweenLite.from(h1, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.2});
// TweenLite.from(intro, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.4});
// TweenLite.from(img, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.6});
// TweenLite.from(h2, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.8});
// TweenLite.from(listItemUl, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 1});
// TweenLite.from(listItemLi, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 1});
//endregion
console.log('TimelineLite', TimelineLite);
var tl = new TimelineLite();
tl
    .from(h1, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut })
    .from(intro, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, '-=0.15')
    .from(img, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, '-=0.15')
    .from(h2, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, '-=0.15')
    .from(listItemUl, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, '-=0.15')
    .from(listItemLi, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, '-=0.15');
//# sourceMappingURL=basic-tween.js.map.js.map