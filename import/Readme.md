# Using the `import` Statement in JavaScript

The `import` statement is used to bring in modules, functions, objects, or primitives that have been exported from another module. This is a part of the ES6 (ECMAScript 2015) module system.


### The directory in which import is used, must have type:"module" in package.json

## Syntax

There are several ways to use the `import` statement, depending on what you want to import:

### 1. Importing Named Exports

If a module exports specific values, you can import them using their names:

```javascript
import { functionName, variableName } from './module.js';



# Importing Default Exports in JavaScript

The `import` statement allows you to bring in default exports from other modules. A default export is a single value or function that can be imported without using curly braces.

## Syntax

To import a default export, use the following syntax:

```javascript
import defaultExport from './module.js';
