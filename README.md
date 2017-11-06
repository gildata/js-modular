# JavasScript Modular

> Module Format(AMD/CommonJS/UMD/CMD/ES6)  

> Module Loader(RequireJS/SystemJS/Gulp task/webapck loader) 

> Module Bundler(Browserify/Gulp/Webpack/Rollup)  


```js
    // todo
    
```

### Webpack

> code spiltting & dynamic imports module at runtime

https://github.com/tc39/proposal-dynamic-import

https://webpack.js.org/


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
















