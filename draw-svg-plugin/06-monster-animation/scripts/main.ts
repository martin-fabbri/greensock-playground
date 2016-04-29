/// <reference path="../../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../../typings/main/ambient/TweenMax/TweenMax.d.ts" />
/// <reference path="../../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
/// <reference path="../../../typings/main/ambient/jquery/index.d.ts" />
import * as $ from 'jquery';
import * as TimelineLite from 'TimelineLite';
import 'CSSPlugin';
import 'EasePack';
import 'DrawSVGPlugin';
import 'AttrPlugin';
import 'MorphSVGPlugin';

//region Element Selectors
const $monstaPath = $('.monsta path');
const $arms = $('#arms');
//endregion

//region Animation Configuration
const duration = 1;
//endregion

//region Animation Sequence
const tl = new TimelineLite();

tl
    .set($monstaPath, {
        stroke: '#6ffee8',
        visibility: 'visible'
    })
    .fromTo($monstaPath, duration,
        {drawSVG: '50% 50%'},
        {drawSVG: true, ease: Power2.easeOut}
    );

//endregion

