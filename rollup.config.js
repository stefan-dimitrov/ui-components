'use strict'
import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'
import jsx from 'rollup-plugin-jsx'

export default [
  {
    input: './packages/web/src/index.js',
    output: {
      file: './dist/ui-components-web.cjs.js',
      format: 'cjs'
    },
    external: [
      'react', 
      'prop-types'
    ],
    plugins: [
      filesize(),
      resolve(),
      babel({ exclude: 'node_modules/**' })
    ]
  },
  {
    input: './packages/native/src/index.js',
    output: {
      file: './dist/ui-components-native.cjs.js',
      format: 'cjs'
    },
    external: [
      'react', 
      'react-native', 
      'prop-types'
    ],
    plugins: [
      filesize(),
      resolve(),
      jsx( {factory: 'React.createElement'} )
    ]
  }
]
