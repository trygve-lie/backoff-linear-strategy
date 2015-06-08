/* jshint node: true, strict: true */

"use strict";


var LinearBackoffStrategy = require('../'),
    Backoff = require('backoff/lib/backoff');



var backoff = new Backoff(new LinearBackoffStrategy({
    initialDelay: 500,
    maxDelay: 2000
}));

backoff.failAfter(10);



backoff.on('backoff', function (number, delay) {
    console.log('backoff start', number, delay);
});

backoff.on('ready', function (number, delay) {
    console.log('backoff done', number, delay);

    if (number < 15) {
        backoff.backoff();
    }

});

backoff.on('fail', function () {
    console.log('fail');
});

backoff.backoff();
