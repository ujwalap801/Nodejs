# Node.js `require()` and `module.exports`

In Node.js, `require()` and `module.exports` are fundamental components used for modular programming. They allow developers to organize code into reusable modules.
A built-in function to include external modules that exist in separate files

## `require()`

The `require()` function is used to load modules in Node.js. It enables you to include external JavaScript files, JSON files, or built-in modules into your current file. When you use `require()`, it returns the module's exports, which can be functions, objects, or primitives.

### Syntax

```javascript
const moduleName = require('module-path');




# Node.js `module.exports`

`module.exports` is an object that represents the exports of a module in Node.js. It allows you to define what is accessible to other modules when they use the `require()` function.

## Definition

By assigning properties or functions to `module.exports`, you determine what can be imported by other files. This enables the creation of reusable and modular code.
It returns empty object {} if nothing exported

## Syntax

```javascript
// Example: Exporting a single function
module.exports = function() {
  console.log("Hello from the exported function!");
};

// Example: Exporting multiple functions
module.exports = {
  greet: function(name) {
    return `Hello, ${name}!`;
  },
  add: function(a, b) {
    return a + b;
  }
};
