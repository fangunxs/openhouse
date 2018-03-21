/**
 * Created by Fon on 3/18/18.
 */
var webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist/assets',
    filename: 'bundle.js',
    publicPath: 'assets'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /.\js$/,
        exclude: /(node_module)/,
        loader: ['babel-loader'],
        query: {
          presets: ['latest', 'stage-0', 'react']
        }
      }
    ]
  }
}
