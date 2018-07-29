// const path = require('path');
import path from "path";

import uglify from "rollup-plugin-uglify";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
// import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";


// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false

const production = !process.env.ROLLUP_WATCH;
const version = `v1.1.1`;
const author = `xgqfrms`;

export default {
    // intro: 'var ENVIRONMENT = "production";',
    // banner: `/* preview version ${version} */`,
    // footer: `/* Follow me on Twitter! @${author} */`,
    footer: "/* Follow me on Twitter! @xgqfrms */",
    // entry: 'src/main.js',
    input: "src/main.js",
    // dest: 'public/bundle.js',
    output: {
        // path: path.resolve(__dirname, "public/js/"),
        // file: "public/js/[name].min.js",
        file: "public/js/bundle.js",
        name: "holy_shit",
        format: "iife", // immediately-invoked function expression — suitable for <script> tags
        // format: 'cjs', // for system.js/node.js
        // import { selectAll } from 'd3';
        // selectAll('p').style('color', 'purple');
        // paths: {
        //     d3: 'https://d3js.org/d3.v4.min'
        // },
        sourcemap: true
    },
    plugins: [
        resolve(), // tells Rollup how to find date-fns in node_modules
        commonjs(), // converts date-fns to ES modules
        production && uglify(), // minify, but only in production
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        })
    ],
    // sourceMap: true
    // sourcemap: true
};

/*
    // webpack
    path: path.resolve(__dirname, "build/js/"),//主目录
    filename: '[name].min.js',// ??? hash version

*/
