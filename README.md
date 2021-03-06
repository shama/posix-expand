# [posix-expand](http://pubs.opengroup.org/onlinepubs/9699919799/utilities/expand.html)

A POSIX-like `expand` in JavaScript.

[![NPM](https://nodei.co/npm/posix-expand.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/posix-expand/)

[![build status](https://secure.travis-ci.org/shama/posix-expand.svg)](https://travis-ci.org/shama/posix-expand)
[![Build status](https://ci.appveyor.com/api/projects/status/9237tat1hx6dxfy2)](https://ci.appveyor.com/project/shama/posix-expand)
[![NPM version](https://badge.fury.io/js/posix-expand.svg)](https://badge.fury.io/js/posix-expand)

<!-- [![browser support][https://ci.testling.com/shama/posix-expand.png]][https://ci.testling.com/shama/posix-expand] -->
[![Sauce Test Status](https://saucelabs.com/browser-matrix/shama.svg)](https://saucelabs.com/u/shama)

## CLI

```shell
expand tabs.file > spaces.file
```

## API

```js
var Expand = require('posix-expand')
```

### `var expand = new Expand(argv)`
Returns a transform stream. `argv` can be:

* `_`: An array of arguments, file inputs; such as `expand one.js two.js three.js`
* `fs`: Override the file system with a node/io compatible fs.
* `t`: Number of tab stops. Default is 8.

# license
(c) 2015 Kyle Robinson Young. MIT License
