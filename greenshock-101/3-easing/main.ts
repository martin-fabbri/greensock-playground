/// <reference path="./../../typings/main.d.ts" />

(($) => {

    //region JQuery Element Selectors
    const img = $('img');
    const h2 = $('h2');
    //endregion

    //TweenLite.from(img, 1, {x: -200, ease: Power0.easeNone});
    //TweenLite.from(img, 1, {x: -200, ease: Power1.easeIn});
    //TweenLite.from(img, 1, {x: -200, ease: Power1.easeOut});
    //TweenLite.from(img, 1, {x: -200, ease: Back.easeOut});
    TweenLite.from(img, 1, {x: -200, ease: Bounce.easeOut});
    //TweenLite.from(img, 1, {x: -200, ease: Circ.easeOut});
    //TweenLite.from(img, 1, {x: -200, ease: Elastic.easeOut.config(1, 0.3), y:0});
    //TweenLite.from(img, 1, {x: -200, ease: Expo.easeOut});
    //TweenLite.from(img, 1, {x: -200, ease: Sine.easeOut});
    //TweenLite.from(img, 1,
    //    { x: -200, ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 20,
    //        taper: "none", randomize: true, clamp: false}), y: 0 });
    //TweenLite.from(img, 1, {x: -200, ease: SlowMo.ease.config(0.7, 0.7, false), y: 0});
    //TweenLite.from(img, 1, {x: -200, ease: SteppedEase.config(12), y: 0});

    TweenLite.from(h2, 1, {autoAlpha: 0, delay: 1});


})(jQuery);
