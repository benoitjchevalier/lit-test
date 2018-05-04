import common from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'lit-test.js',
  output: {
    file: 'build/bundle.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    common(),
    babel({
      // exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};