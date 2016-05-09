# backoff-linear-strategy

[![Dependencies](https://img.shields.io/david/trygve-lie/backoff-linear-strategy.svg?style=flat-square)](https://david-dm.org/trygve-lie/backoff-linear-strategy)[![Build Status](http://img.shields.io/travis/trygve-lie/backoff-linear-strategy/master.svg?style=flat-square)](https://travis-ci.org/trygve-lie/backoff-linear-strategy)

Linear strategy for [backoff](https://github.com/MathieuTurcotte/node-backoff).



## Installation

```bash
$ npm install backoff-linear-strategy
```



## Usage

Construct a lineary backoff with a initial delay of 50ms and a
maximum delay of 500ms which will fail after 10 retries.

```js
var LinearBackoffStrategy = require('backoff-linear-strategy'),
    Backoff = require('backoff/lib/backoff');

var linear = new Backoff(new LinearBackoffStrategy({
    initialDelay: 50,
    maxDelay: 500
}));

linear.failAfter(10);

linear.on('backoff', function (number, delay) {
    console.log(number + ' ' + delay + 'ms');
});

linear.on('ready', function (number, delay) {
    linear.backoff();
});

linear.on('fail', function (number, delay) {
    console.log('fail');
});

linear.backoff();
```

The previous example would print the following.

```sh
0 50ms
0 100ms
1 150ms
2 200ms
3 250ms
4 300ms
5 350ms
6 400ms
7 450ms
8 500ms
9 500ms
fail
```



## Tests

```bash
$ npm test
```

Tests are written in [mocha](http://visionmedia.github.io/mocha/).



## License 

The MIT License (MIT)

Copyright (c) 2015 - Trygve Lie - post@trygve-lie.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

