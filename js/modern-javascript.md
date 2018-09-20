### Why browserify?
Browserify is a development tool that allows us to write node.js-style modules that compile for use in the browser.

Just like node, we write our modules in separate files, exporting external methods and properties using the `module.exports` and exports variables. Use `require`: uses `node_modules` or the given path.
Example: `var _ = require('underscore');`

* Todo: read this: http://www.jeromesteunou.net/browserify-why-and-how.html
* More clear: https://blakeembrey.com/articles/2013/09/introduction-to-browserify/

#### `browserify` provides:
1. Node-like core modules: `url`, `path`, `stream`, `events`, `http`.
2. Transforms

Others: `process`, `Buffer`, `__dirname`, `__filename` and `global`.

`process.nextTick(func)` (calls on the next event loop)

### CommonJS
#### What is `CommonJS` practice of string IDs?
for dependencies.
#### module value
#### "CommonJS modules"
JavaScript modules
* encapsulate a piece of code. register and export it.
* more info https://requirejs.org/docs/whyamd.html

#### CommonJS alternatives:
* CommonJS
* AMD
* RequireJS

#### AMD:
#### Why AMD modules versus CommonJS modules.
#### Why AMD modules versus CommonJS modules?
* AMD modules: work better in the browser
* AMD modules: multiple modules in one file (a.k.a transport format)

### Dependency inhjection, AMD style.
`define(['dep1', 'dep2'], function (dep1, dep2) {
    return function () {};  // the module
});`




### Various
* jQuery, Backbone & Underscore releases are AMD / CJS compatible

## common JS problems
### Dependency injection
* implicit dependencies that you have to manually order

### encapsulation
Solutions: module pattern

### transform
`--transform`
On browserify: With the --transform or -t option and some great plugins you can load not only JavaScript CommonJS module but anything that have a transform plugin


## Solutions/techniques/patterns in JS:
Some patterns: http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
### factory function
Similar to the one used by Angular for dependency injection. (i.e. AMD style?)
### module pattern
### anonymous functions
### anonymous functions with arguments
used for DI
### Some patterns:
* Cross-File Private State (uses clusure to hide access as member. May use `delete`)

## Cute solutions
* `f(MODULE || {})`
* `for (key in old) if (old.hasOwnProperty(key)) {}`
