/// <reference path="../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
import * as TweenLite from 'TweenLite';
import * as TimelineLite from 'TimelineLite';
import 'CSSPlugin';
import 'EasePack';

//region JavaScript Element Selectors
const buttons = document.getElementsByClassName('btn');
//endregion


const tl = new TimelineLite();

tl.
    staggerFrom(
        buttons,
        2,
        {
            scale: 0.5,
            opacity: 0,
            delay: 0.5,
            ease: Elastic.easeOut,
            force3D: true
        },
        0.2 // delay between staggered tweens
    );


const tlButtons = new TimelineLite({ paused: true });
tlButtons
    .staggerTo(buttons, 0.5, {opacity: 0, y: -100, ease: Back.easeIn}, 0.1);

const onButtonClicked = ()=> {
    tlButtons.play();
}

for (var i=0; i < buttons.length; i++) {
    (<HTMLElement>buttons.item(i)).onclick = onButtonClicked;
}