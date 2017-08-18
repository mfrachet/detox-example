[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Travis](https://travis-ci.org/mfrachet/detox-example.svg?branch=master)

![Detox tests](https://img4.hostingpics.net/pics/420897detox.gif)


# detox-example

This projects aims to provide some example with comment on problems that I've eventually met
while writing the tests suites.

The project uses actually the three following APIs list :

* [Matchers](https://github.com/wix/detox/blob/master/docs/APIRef.Matchers.md) inside of [`./e2e/pageObjects/todo.matchers.js`](https://github.com/mfrachet/detox-example/blob/master/e2e/pageObjects/todo.matchers.js)
* [Actions](https://github.com/wix/detox/blob/master/docs/APIRef.ActionsOnElement.md) inside of [`./e2e/tests/todo.actions.js`](https://github.com/mfrachet/detox-example/blob/master/e2e/tests/todo.actions.js)
* [Expectations](https://github.com/wix/detox/blob/master/docs/APIRef.Expect.md) inside of [`./e2e/tests/todo.expectations.js`](https://github.com/mfrachet/detox-example/blob/master/e2e/tests/todo.expectations.js)

## Local usage

```javascript
$ node version /* should be >= Node 7.6.0 */
```

```
$ git clone https://github.com/mfrachet/detox-example && cd detox-example
```

```
$ npm i
```

```
$ npm run e2e
```
