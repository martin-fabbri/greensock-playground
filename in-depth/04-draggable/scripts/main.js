"use strict";
/// <reference path="../../../typings/main/ambient/TweenMax/TweenMax.d.ts" />
/// <reference path="../../../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../../../typings/main/ambient/Draggable/Draggable.d.ts" />
var $ = require('jquery');
var Draggable = require('Draggable');
require('CSSPlugin');
require('EasePack');
require('ThrowPropsPlugin');
//region Element Selectors
var $draggableContainer = $('.gridContainer');
Draggable.create('.moveAble', {
    bounds: $draggableContainer,
    edgeResistance: 0.65,
    cursor: 'pointer',
    type: 'x',
    //dragResistance: 0.75
    throwProps: true
});
//endregion
//# sourceMappingURL=main.js.map