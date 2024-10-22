## 1. Default Export

### A default export allows you to export a single value (function, object, class, etc.) from a module. When a module has a default export, you don't need to use curly braces when importing it.

## Example:
### defaultExport.js(File)

### // Default export
### const greeting = () => {
   ### console.log("Hello, world!");
### };

### module.exports = greeting;


### import.js(File)

### // Import the default export
### const greet = require('./defaultExport');
### greet(); // Outputs: Hello, world!


## 2. Named Export
### A named export allows you to export multiple variables, functions, or objects from a module. You must use the same name to import them in other files, and curly braces are required when importing.

## Example:

### namedExport.js(File)

### // Named exports
### const sayHello = () => {
### console.log("Hello!");
### };

### const sayGoodbye = () => {
### console.log("Goodbye!");
### };

### module.exports = { sayHello, sayGoodbye };



### import.js(File)
### // Import the named exports
### const { sayHello, sayGoodbye } = require('./namedExport');
### sayHello();   // Outputs: Hello!
### sayGoodbye(); // Outputs: Goodbye!



## Default Export: Exporting a single value, imported without curly braces.

## Named Export: Exporting multiple values, imported using curly braces.