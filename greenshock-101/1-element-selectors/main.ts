/// <reference path="./../../typings/main.d.ts" />

//(($) => {

    //region JQuery Element Selectors
    // const header = $('#header');
    // const h1 = $('h1');
    // const intro = $('.intro');
    // const firstItem = $('li:first-child');
    // const secondItem = $('li:nth-child(2)');
    // const lastItem = $('li:last-child');
    //endregion

    //region Element Selectors Plain JavaScript
    const header = document.getElementById('header');
    const h1 = document.getElementsByTagName('h1');
    const intro = document.getElementsByClassName('intro');
    const firstItem = document.getElementsByClassName('list')[0].firstElementChild;
    const lastItem = document.getElementsByClassName('list')[0].lastElementChild;
    //endregion

    TweenLite.to(h1, 1, {opacity: 0, x: 50});


//})(jQuery);
