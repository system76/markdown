import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'

const DEFAULT_CONFIG = {
  input: 'src/index.js',
  external: ['markdown-it', 'markdown-it-kbd', 'markdown-it-link-attributes'],
  plugins: [
    replace({
      ENVIRONMENT: JSON.stringify('production')
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({ exclude: 'node_modules/**' }),
    terser({
      output: {
        ecma: 6
      }
    })
  ]
}

export default [{
  ...DEFAULT_CONFIG,
  output: {
    file: 'dist/index.esm.js',
    format: 'esm',
    sourcemap: true
  }
}, {
  ...DEFAULT_CONFIG,
  output: {
    compact: true,
    exports: 'named',
    file: 'dist/index.common.js',
    format: 'cjs',
    name: 'SysMarkdown',
    sourcemap: true
  }
}]
