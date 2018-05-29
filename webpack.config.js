const path = require('path')
// "build": "webpack --progress  --config  ./webpack.config.js",
module.exports = {
  entry: {
    'rc-viewer': './src/index.js'
  },
  mode: 'production',
  // mode:'development',
  output: {
    filename: './[name].js',
    library: 'RcViewer',
    libraryTarget: 'umd'
  },
  externals: [
    {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React'
      }
    }, {
      viewerjs: {
        commonjs: 'viewerjs',
        commonjs2: 'viewerjs',
        amd: 'viewerjs',
        root: 'Viewer'
      }
    },
    'viewerjs/dist/viewer.min.css'
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, './src'),
        options:{
          presets: [
            "env",
            "stage-0",
            "react"
          ],
          plugins : [ "add-module-exports"]
        }
      }, 
     
    ]
  }
}
