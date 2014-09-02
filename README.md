# grunt-ts-compiler

![](https://badge.fury.io/js/grunt-ts-compiler.svg)&nbsp;&nbsp;
![](https://david-dm.org/mihhail-lapushkin/grunt-ts-compiler.png)

> TypeScript compiler

TypeScript compiler.


## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ts-compiler --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ts-compiler');
```

## typescript task
Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### TODO

Type: TODO

Default: TODO

TODO

### Usage Examples

#### Example 1

```js
typescript: {
  dist: {
    options: {
      compilerOptions: {
        target: 'ES5',
        outDir: './scripts/js'
      },
      baseDir: './scripts/ts'
    },
    src: './scripts/ts/**/*.ts'
  }
}
```

#### Example 2

```js
typescript: {
  dist: {
    options: {
      compilerOptions: {
        noImplicitAny: true,
        out: './scripts/js/out.js'
      },
      baseDir: './scripts/ts'
    },
    src: './scripts/ts/**/*.ts'
  }
}
```

## Release History
 * **0.1.0** / 2014-09-02
   * First version.