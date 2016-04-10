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
var header = document.getElementById('header');
var h1 = document.getElementsByTagName('h1');
var intro = document.getElementsByClassName('intro');
var firstItem = document.getElementsByClassName('list')[0].firstElementChild;
var lastItem = document.getElementsByClassName('list')[0].lastElementChild;
//endregion
TweenLite.to(firstItem, 1, { opacity: 0, x: 50 });
//})(jQuery);
//# sourceMappingURL=main.js.map