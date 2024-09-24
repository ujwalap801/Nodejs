# Node.js Command-Line Arguments

In Node.js, `process.argv` is an array that contains the command-line arguments passed when the Node.js process is launched. The first two elements are default, and the remaining elements correspond to any additional arguments provided by the user.

## Structure of `process.argv`

- `process.argv[0]`: The path to the Node.js executable.
- `process.argv[1]`: The path to the JavaScript file being executed.
- `process.argv[2]` and onward: Any additional command-line arguments provided by the user.

## Example

If you run the following command:

```bash
node index.js arg1 arg2 arg3

## Then process.argv will contain:
[
  '/usr/local/bin/node',  // Path to Node.js executable
  '/path/to/index.js',    // Path to the file being run
  'arg1',                 // Custom argument
  'arg2',                 // Custom argument
  'arg3'                  // Custom argument
]

