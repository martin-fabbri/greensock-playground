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

//region Individual animation without timeline
// TweenLite.from(h1, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.2});
// TweenLite.from(intro, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.4});
// TweenLite.from(img, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.6});
// TweenLite.from(h2, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.8});
// TweenLite.from(listItemUl, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 1});
// TweenLite.from(listItemLi, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 1});
//endregion

const tl = new TimelineLite();

tl
    .from(h1, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut})
    .add('intro')
    .from(intro, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut})
    .from(img, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut})
    .from(h2, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut}, 'intro')
    .from(listItemUl, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut}, 'intro+=3')
    .from(listItemLi, 0.3, {y: -15, autoAlpha: 0, ease: Power1.easeOut}, 'intro+=3');






