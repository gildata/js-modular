# JavasScript Modular

> Module Format(AMD/CommonJS/UMD/CMD/ES6)

> Module Loader(RequireJS/SystemJS/Gulp task/webapck loader)

> Module Bundler(Browserify/Gulp/Webpack/Rollup)


```js
    // todo

```


## rollup & eslint

```sh

$ npm i -D rollup eslint

$ npm i -D rollup
$ npm i -D eslint


$ npm i -D rollup-plugin-uglify rollup-plugin-commonjs rollup-plugin-node-resolve

$ npm i -D rollup-plugin-commonjs
$ npm i -D rollup-plugin-uglify
$ npm i -D rollup-plugin-node-resolve


```

https://github.com/rollup/rollup-plugin-commonjs
https://github.com/rollup/rollup-plugin-node-resolve

https://github.com/TrySound/rollup-plugin-uglify

```md

"off" or 0 - turn the rule off
"warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
"error" or 2 - turn the rule on as an error (exit code will be 1)


```


rollup --help, or rollup -h.
The -f option (short for --output.format)
the --config or -c flag:


```md


-i, --input                 Input file (required)
-o, --output.file           Output (if absent, prints to stdout)
-f, --output.format [es]    Type of output (amd, cjs, es, iife, umd)
-e, --external              Comma-separate list of module IDs to exclude
-g, --globals               Comma-separate list of `module ID:Global` pairs
                              Any module IDs defined here are added to external
-n, --name                  Name for UMD export
-m, --sourcemap             Generate sourcemap (`-m inline` for inline map)
--amd.id                    ID for AMD module (default is anonymous)
--amd.define                Function to use in place of `define`
--no-strict                 Omit `"use strict";` in the generated bundle
--no-conflict               Generate a noConflict method for UMD globals
--intro                     Content to insert at top of bundle (inside wrapper)
--outro                     Content to insert at end of bundle (inside wrapper)
--banner                    Content to insert at top of bundle (outside wrapper)
--footer                    Content to insert at end of bundle (outside wrapper)
--interop                   Include interop block (true by default)


In addition, the following arguments can be used:

-h/--help
Print the help document.

-v/--version
Print the installed version number.

-w/--watch
Rebuild the bundle when its source files change on disk.

--silent
Don't print warnings to the console.
```




# Webpack


```sh

$ npm i -D babel babel-cli babel-core babel-preset-env babel-polyfill
$ npm i -D babel-loader babel-plugin-transform-object-rest-spread babel-preset-react


$ npm i -D webpack uglifyjs-webpack-plugin html-webpack-plugin clean-webpack-plugin


```


## code spiltting

> code spiltting & dynamic imports module at runtime

https://github.com/tc39/proposal-dynamic-import

https://webpack.js.org/



https://webpack.js.org/guides/code-splitting/

https://webpack.js.org/plugins/commons-chunk-plugin/

https://webpack.js.org/plugins/extract-text-webpack-plugin/
https://webpack.js.org/loaders/bundle-loader/
https://github.com/gaearon/promise-loader



https://webpack.js.org/guides/code-splitting/#dynamic-imports


chunkFilename: '[name].bundle.js',

## import & then & catch

## async function & await

https://webpack.js.org/guides/lazy-loading/
https://github.com/webpack/analyse
https://webpack.js.org/guides/caching/

filename: '[name].[chunkhash].js',

vendor: [
    'lodash'
]

new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
}),

new webpack.HashedModuleIdsPlugin(),



https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc


### Rollup

> Tree-shaking

https://rollupjs.org/

https://rollupjs.org/repl

https://github.com/rollup/rollup

https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80#.jnypozs9n


CommonJS modules, AMD modules, and IIFE-style scripts.

https://github.com/rollup/rollup/wiki/Command-Line-Interface
https://github.com/rollup/rollup/wiki/JavaScript-API

https://github.com/rollup/rollup-starter-lib
https://github.com/rollup/rollup-starter-app




```sh

$ npm install --global rollup
$ rollup --help

$ npm i -g rollup
$ rollup -h

# -f === --output.format

# -c === --config

# -w === --watch

# -n/--name
# -e/--external
# -g/--globals

# -m/--sourcemap

# -i/--input
# -o/--output.file
# -f/--output.format

# amd – Asynchronous Module Definition, used with module loaders like RequireJS
# cjs – CommonJS, suitable for Node and Browserify/Webpack
# es – Keep the bundle as an ES module file
# umd – Universal Module Definition, works as amd, cjs and iife all in one

# iife – A self-executing function, suitable for inclusion as a <script> tag.
# (If you want to create a bundle for your application, you probably want to use this, because it leads to smaller file sizes.)


# plugins: [ resolve(), commonjs()]



```

```sh


#For browsers:
# compile to a <script> containing a self-executing function ('iife')
$ rollup main.js --o bundle.js --f iife

# For Node.js:
# compile to a CommonJS module ('cjs')
$ rollup main.js --o bundle.js --f cjs

# For both browsers and Node.js:
# UMD format requires a bundle name
$ rollup main.js --o bundle.js -f umd --name "myBundle"

# rollup.config.js:
$ rollup --config rollup.config.dev.js
$ rollup --config rollup.config.prod.js

```



```json

{
    "name": "rollup-starter-app",
    "devDependencies": {
        "rollup": "^0.46.0",
        "rollup-plugin-commonjs": "^8.0.2",
        "rollup-plugin-node-resolve": "^3.0.0",
        "rollup-plugin-uglify": "^2.0.1"
    },
    "dependencies": {
        "date-fns": "^1.28.5",
        "serve": "^6.0.2"
    },
    "scripts": {
        "build": "rollup -c",
        "dev": "rollup -c -w",
        "start": "serve public"
    }
}

```

```js


// rollup.config.js
export default {
    input: 'src/main.js',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    }
};

```

```js

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    entry: 'src/main.js',
    dest: 'public/bundle.js',
    format: 'iife', // immediately-invoked function expression — suitable for <script> tags
    plugins: [
        resolve(), // tells Rollup how to find date-fns in node_modules
        commonjs(), // converts date-fns to ES modules
        production && uglify() // minify, but only in production
    ],
    sourceMap: true
};

```

### rollup-plugin-json

https://github.com/rollup/rollup-plugin-json

```js

// import a single property from a JSON file,
// discarding the rest
import { version } from './package.json';
console.log( `running version ${version}` );

// import the whole file as an object
import pkg from './package.json';
console.log( `running version ${pkg.version}` );

```

```js

// rollup.config.js
import json from 'rollup-plugin-json';

export default {
    entry: 'src/main.js',
    dest: 'dist/bundle.js',
    format: 'iife',
    plugins: [
        json({
            // All JSON files will be parsed by default,
            // but you can also specifically include/exclude files
            include: 'node_modules/**',
            exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],
            // for tree-shaking, properties will be declared as
            // variables, using either `var` or `const`
            preferConst: true, // Default: false
            // specify indentation for the generated default export —
            // defaults to '\t'
            indent: '  '
        })
    ]
};

```

## Babel


```sh

$ npm i -D rollup-plugin-babel

$ npm i -D babel-preset-latest babel-plugin-external-helpers

```


## Empty Import

Load the module code, but don't make any new objects available.

```js

import './module.js';// images / css ???

// This is useful for polyfills,
// or when the primary purpose of the imported code is to muck about with prototypes

```



## umd demo

https://rollupjs.org/repl

```js
import { cube } from './maths.js';
console.log( cube( 5 ) ); // 125

```

```js
// This function isn't used anywhere, so
// Rollup excludes it from the bundle...
export function square ( x ) {
    return x * x;
}

// This function gets included
export function cube ( x ) {
    // rewrite this as `square( x ) * x`
    // and see what happens!
    return x * x * x;
}

```


```js

(function (global, factory) {
    // umd === commonjs(exports/module.exports)/amd(define)/global var(IIFE)
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) : (factory());
}(this, (
    function () {
        'use strict';
        // This function isn't used anywhere, so
        // Rollup excludes it from the bundle...

        // This function gets included
        function cube (x) {
            // rewrite this as `square( x ) * x`
            // and see what happens!
            return x*x*x;// x**3;
        }
        console.log(cube(5)); // 125
    }
)));

```


### IIFE & UMD

```js

(function (global, factory) {
    // umd === commonjs(exports/module.exports)/amd(define)/global var(IIFE)
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) : (factory());
}(this, (
    function () {
        'use strict';
        // local variable
        let b = document.querySelector(`body`);
        // in ES5 strict mode, call a var before declare it will throw an error!
        b.style.background = `#0f0`;
        // just call function in IIFE, which can not execute out of this IIFE function!
        const init = () => {
            console.log(`this is just an init function!`);
        };
        return {
            init
        };
    }
)));
b;
// Uncaught ReferenceError: b is not defined

```














