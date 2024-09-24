# Installing npm Packages Globally

When you want to install npm packages globally, you can use the following commands:

## 1. Install a Package Globally

To install a package globally, use the following command:

```bash
npm install -g <package-name>


# Linking npm Packages

The `npm link <package-name>` command is used to create a symbolic link from a globally-installed package to your local project. This is particularly useful during development when you want to test changes made in a local package without having to publish it to the npm registry.

## How to Use `npm link`

### Step 1: Link the Package Globally

First, navigate to the directory of the package you want to link:

```bash
cd /path/to/your/package
