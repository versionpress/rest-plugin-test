var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/index'
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel'],
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};