/// <reference path="../../typings/main/ambient/TweenLite/TweenLite.d.ts" />
/// <reference path="../../typings/main/ambient/TimelineLite/TimelineLite.d.ts" />
import * as TweenLite from 'TweenLite';
import * as TimelineLite from 'TimelineLite';
import 'CSSPlugin';

// logo1 animation
TweenLite.to('#logo1', 10, {
    left: 600,
    backgroundColor: 'red',
    padding: 20,
    borderColor: 'white',
    borderRadius: 26
});

// logo2 animation
TweenLite.to('#logo2', 10, {x: 300});




