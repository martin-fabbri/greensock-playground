/// <reference path="./../../typings/main.d.ts" />

(($) => {

    //region JQuery Element Selectors
    const img = $('img');
    const h2 = $('h2');
    //endregion

    TweenLite.from(img, 1, {x: 200, ease: Power1.easeInOut});


})(jQuery);
