/// <reference path="./../../typings/main.d.ts" />
(function ($) {
    //region JQuery Element Selectors
    var img = $('img');
    var h2 = $('h2');
    //endregion
    TweenLite.from(img, 1, { x: 200, ease: Power1.easeInOut });
})(jQuery);
//# sourceMappingURL=main.js.map