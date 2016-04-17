"use strict";
var TimelineLite = require('TimelineLite');
require('CSSPlugin');
require('EasePack');
//region JavaScript Element Selectors
var buttons = document.getElementsByClassName('btn');
//endregion
var tl = new TimelineLite();
tl.
    staggerFrom(buttons, 2, {
    scale: 0.5,
    opacity: 0,
    delay: 0.5,
    ease: Elastic.easeOut,
    force3D: true
}, 0.2 // delay between staggered tweens
);
var tlButtons = new TimelineLite({ paused: true });
tlButtons
    .staggerTo(buttons, 0.5, { opacity: 0, y: -100, ease: Back.easeIn }, 0.1);
var onButtonClicked = function () {
    tlButtons.play();
};
for (var i = 0; i < buttons.length; i++) {
    buttons.item(i).onclick = onButtonClicked;
}
//# sourceMappingURL=main.js.map