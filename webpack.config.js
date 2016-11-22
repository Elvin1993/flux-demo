var webpack = require('webpack')

module.exports = {
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