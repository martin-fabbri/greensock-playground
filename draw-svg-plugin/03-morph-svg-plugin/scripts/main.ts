/// <reference path="../../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../../typings/main/ambient/TweenMax/TweenMax.d.ts" />
/// <reference path="../../../typings/main/ambient/jquery/index.d.ts" />
import * as $ from 'jquery';
import * as TweenMax from 'TweenMax';
import 'CSSPlugin';
import 'EasePack';
import 'DrawSVGPlugin';
import 'AttrPlugin';
import 'MorphSVGPlugin';

//region Element Selectors
const $start = document.getElementById('start');
const $end = document.getElementById('end');
//endregion



//region SVG animations
TweenMax
    .to($start, 2, {
        morphSVG: {
            shape: '#end',
            shapeIndex: 'auto'
            //shapeIndex: -1
        },
        ease: Bounce.easeOut
    });

//endregion
