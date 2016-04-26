"use strict";
var TimelineLite = require('TimelineLite');
require('CSSPlugin');
require('EasePack');
require('DrawSVGPlugin');
require('AttrPlugin');
require('MorphSVGPlugin');
//region Element Selectors
var $hippo = document.getElementById('hippo');
var $elephant = document.getElementById('elephant');
//endregion
//region SVG animations
var tl = new TimelineLite();
tl
    .set($elephant, {
    alpha: 0
})
    .to($hippo, 2, {
    morphSVG: {
        shape: '#elephant',
        shapeIndex: 'auto'
    },
    ease: Bounce.easeOut
});
//endregion
//# sourceMappingURL=main.js.map