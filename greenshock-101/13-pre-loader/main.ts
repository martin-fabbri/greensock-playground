/// <reference path="../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../typings/main/ambient/TimelineMax/TimelineMax.d.ts" />
import * as TimelineMax from 'TimelineMax';
import 'CSSPlugin';
import 'EasePack';

//region JavaScript Element Selectors
const img = document.getElementsByTagName('img');
const h2 = document.getElementsByTagName('h2');
const h1 = document.getElementsByTagName('h1');
const intro = document.getElementsByClassName('intro');
const listItemUl = document.getElementsByTagName('ul');
const listItemLi = document.getElementsByTagName('li');
const header = document.getElementById('header');
//endregion

//region JavaScript Element Selectors
const dot = document.getElementsByClassName('dot');
const loader = document.getElementById('loader');
//endregion

//region Playback buttons
const playButton = document.getElementById('btnPlay');
const pauseButton = document.getElementById('btnPause');
const resumeButton = document.getElementById('btnResume');
const reverseButton = document.getElementById('btnReverse');
const speedUpButton = document.getElementById('btnSpeedUp');
const slowDownButton = document.getElementById('btnSlowDown');
const seeek1secButton = document.getElementById('btnSeek');
const goTo50PercentButton = document.getElementById('btnProgress');
const restartButton = document.getElementById('btnRestart');
const buttons = document.getElementsByTagName('button');
//endregion




const tl = new TimelineMax({paused: true});
tl
    .set(header, {autoAlpha: 1})
    .from(h1, 1, {y: -15, autoAlpha: 0, ease: Power1.easeOut})
    .add('intro')
    .from(intro, 1, {y: -15, autoAlpha: 0, ease: Power1.easeOut})
    .from(img, 1, {y: -15, autoAlpha: 0, ease: Power1.easeOut})
    .from(h2, 1, {y: -15, autoAlpha: 0, ease: Power1.easeOut}, 'intro')
    .from(listItemUl, 1, {y: -15, autoAlpha: 0, ease: Power1.easeOut}, 'intro+=3')
    .from(listItemLi, 1, {y: -15, autoAlpha: 0, ease: Power1.easeOut}, 'intro+=3')
    .staggerFrom(buttons, 0.2, {
        //x: 200,
        cycle: {
            x: [50, -50],
            scale: [2, 0.5]
        },
        ease: Power1.easeOut,
        autoAlpha: 0
    }, 0.1);

const contentIn = ()=> {
    tl.play();
}

playButton.onclick = ()=> {
    tl.play();
};

pauseButton.onclick = ()=> {
    tl.pause();
};

resumeButton.onclick = ()=> {
    tl.resume();
};

reverseButton.onclick = ()=> {
    tl.reverse();
};

speedUpButton.onclick = ()=> {
    tl.timeScale(8);
};

slowDownButton.onclick = ()=> {
    tl.timeScale(0.5);
};

seeek1secButton.onclick = ()=> {
    //tl.seek(1);   //absolute time in the animation
    tl.seek('intro'); //specific label
};

goTo50PercentButton.onclick = ()=> {
    tl.progress(0.5);
};

restartButton.onclick = ()=> {
    tl.restart();
};


//region Content Loader Timeline
const tlLoaderOut = new TimelineMax({paused: true, onComplete: contentIn});
tlLoaderOut
    .set(dot, {backgroundColor: '#2b4d66'})
    .to(loader, 0.3, {autoAlpha: 1, scale: 1.3, ease: Power0.easeOut})
    .staggerFromTo(dot, 0.3,
        {y: 0, autoAlpha: 0},
        {y: 20, autoAlpha: 1, ease: Back.easeInOut},
        0.05, 0
    )
    .to(loader, 0.3, {y: -150, autoAlpha: 0, ease: Back.easeIn}, '+=0.3');
//endregion

const loadContent = ()=> {
    tlLoaderOut.play();
};


//region Loader Timeline
const tlLoader = new TimelineMax({repeat: 2, onComplete: loadContent});
tlLoader
    .staggerFromTo(dot, 0.3,
        {y: 0, autoAlpha: 0},
        {y: 20, autoAlpha: 1, ease: Back.easeInOut},
        0.05
    )
    .fromTo(loader, 0.3,
        {autoAlpha: 1, scale: 1.3},
        {autoAlpha: 0, scale: 1, ease: Power0.easeOut},
        0.9
    );
//endregion







