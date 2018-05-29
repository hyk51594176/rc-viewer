import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/rc-viewer.js',
    format: 'umd',
    name: 'RcViewer',
    globals: { // 全局模块 提供将外部模块ID转换为全局模块的功能
      react: 'React',
      viewerjs: 'Viewer'
    },
  },
  cache: true,
  external:[
    'react',
    'viewerjs',
    'viewerjs/dist/viewer.min.css'
  ],
  plugins: [
    commonjs({
      include: 'node_modules/**', // 包括
    }),
    babel({
      exclude: 'node_modules/**', // 排除引入的库
      // runtimeHelpers:true,
      // plugins: ['external-helpers'], 
    }),
    uglify(),
  ]
};