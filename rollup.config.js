// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.cjs.js',
    format: 'cjs'
  },
  // All the used libs needs to be here
  external: [
    'react', 
    'prop-types'
  ],
  plugins: [
    filesize(),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
