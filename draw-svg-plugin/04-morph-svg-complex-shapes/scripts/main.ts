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
const $hippo = document.getElementById('hippo');
const $elephant = document.getElementById('elephant');
//endregion

//region SVG animations

const tl = new TimelineLite();

tl
    .set($elephant, {
        alpha: 0
    })
    .to($hippo, 2, {
        morphSVG: {
            shape: '#elephant',
            shapeIndex: 'auto'
            //shapeIndex: -1
        },
        ease: Bounce.easeOut
    });

//endregion
