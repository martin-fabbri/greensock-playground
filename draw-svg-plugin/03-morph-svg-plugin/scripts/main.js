"use strict";
var TweenMax = require('TweenMax');
require('CSSPlugin');
require('EasePack');
require('DrawSVGPlugin');
require('AttrPlugin');
require('MorphSVGPlugin');
//region Element Selectors
var $start = document.getElementById('start');
var $end = document.getElementById('end');
//endregion
//region SVG animations
TweenMax
    .to($start, 2, {
    morphSVG: {
        shape: '#end',
        shapeIndex: 'auto'
    },
    ease: Bounce.easeOut
});
//endregion
//# sourceMappingURL=main.js.map