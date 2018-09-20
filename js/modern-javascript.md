### Why browserify?


### CommonJS
#### What is `CommonJS` practice of string IDs?
for dependencies.
#### module value
#### "CommonJS modules"
JavaScript modules
* encapsulate a piece of code. register and export it.
* more info https://requirejs.org/docs/whyamd.html

#### Why AMD modules versus CommonJS modules.
#### Why AMD modules versus CommonJS modules?
* AMD modules: work better in the browser
* AMD modules: multiple modules in one file (a.k.a transport format)

### Dependency inhjection, AMD style.
`define(['dep1', 'dep2'], function (dep1, dep2) {
    return function () {};  // the module
});`


#### AMD

## common JS problems
### Dependency injection
* implicit dependencies that you have to manually order

### encapsulation
Solutions: module pattern


## Solutions/techniques/patterns in JS:
Some patterns: http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
### factory function
Similar to the one used by Angular for dependency injection. (i.e. AMD style?)
### module pattern
### anonymous functions
### anonymous functions with arguments
used for DI

