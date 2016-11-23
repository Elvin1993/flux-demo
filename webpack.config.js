var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  cache: true,
  noInfo: false,
  stats: {
    colors: true,
    assets: true,
    version: true,
    hash: true,
    timings: true,
    chunks: true,
    chunkModules: false
  },
  debug: true,
  'output-pathinfo': true,
  entry: './index.js',
  output: 'bundle.js',
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  }
}