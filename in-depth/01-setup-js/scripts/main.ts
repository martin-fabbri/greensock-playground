/// <reference path="../../../typings/main/ambient/TweenMax/TweenMax.d.ts" />
/// <reference path="../../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
/// <reference path="../../../typings/main/ambient/jquery/index.d.ts" />
import * as $ from 'jquery';
import * as TweenLite from 'TweenLite';
import 'CSSPlugin';

//region Element Selectors
const $robust = $('#robust');
const $header = $('h1');
//endregion

//region Animations
const startTween = ()=> {
    const initialDelay = 1;

    TweenLite.to($robust, 1, {
        x: 200,
        y: 225,
        //rotation: 90,
        //rotationX: 180,
        rotationY: 180,
        alpha: 0.2,
        //height: 200
        scale: 4,
        delay: initialDelay,
        onComplete: returnToNormal,
        onCompleteParams: [$robust]
    });


    TweenLite.to($header, 1, {
        color: '#ff0000',
        fontSize: '+=10',
        delay: initialDelay + 0.5,
        onComplete: textReturnToNormal,
        onCompleteParams: [$header]
    });
}

const returnToNormal = (targetElements: Object[])=> {
    TweenLite.to(targetElements, 1, {
        x: 0,
        y: 0,
        //rotation: 90,
        //rotationX: 180,
        rotationY: 0,
        alpha: 1,
        //height: 200
        scale: 1
    });
}

const textReturnToNormal = (targetElements: Object[])=> {
    TweenLite.to(targetElements, 1, {
        color: '#ffffff',
        fontSize: '-=10'
    });
}
//endregion


startTween();