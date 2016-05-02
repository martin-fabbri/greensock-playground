/// <reference path="../../../typings/main/ambient/TweenMax/TweenMax.d.ts" />
/// <reference path="../../../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../../../typings/main/ambient/Draggable/Draggable.d.ts" />
import * as $ from 'jquery';
import * as TweenMax from 'TweenMax';
import * as Draggable from 'Draggable';
import 'CSSPlugin';
import 'EasePack';
import 'ThrowPropsPlugin';


//region Element Selectors

const $draggableContainer = $('.gridContainer');

Draggable.create('.moveAble', {
    bounds: $draggableContainer,
    edgeResistance: 0.65,
    cursor: 'pointer',
    type: 'x',
    //dragResistance: 0.75
    throwProps: true
});

//endregion
