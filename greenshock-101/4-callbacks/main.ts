/// <reference path="../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
import * as TweenLite from 'TweenLite';
import 'CSSPlugin';

//region JQuery Element Selectors
const img = document.getElementsByTagName('img');
const h2 = document.getElementsByTagName('h2');
//endregion

const onStart = () => {
    console.log('Animation start!');
};
const onUpdate = () => {
    console.log('Animation is in progress');
};
const onComplete = () => {
    console.log('Animation completed');
};
TweenLite.from(img, 1, {
    x: -200,
    ease: Power1.easeInOut,
    onStart: onStart,
    onUpdate: onUpdate,
    onComplete: onComplete,
});
