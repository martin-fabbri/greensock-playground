/// <reference path="./../../typings/main.d.ts" />
(function ($) {
    //region JQuery Element Selectors
    var img = $('img');
    var h2 = $('h2');
    //endregion
    //TweenLite.to(img, 1, {width: 100});
    //TweenLite.to(img, 1, {x: -200});
    TweenLite.from(img, 1, { x: -200 });
    //TweenLite.fromTo(img, 1, {x: -200}, {x: 200});
    TweenLite.from(h2, 1, { autoAlpha: 0, delay: 1 });
})(jQuery);
//# sourceMappingURL=basic-tween.js.map.js.map