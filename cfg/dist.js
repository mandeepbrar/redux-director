'use strict';

let path = require('path');
let webpack = require('webpack');

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: path.join(__dirname, '../src/index'),
  output: {
    libraryTarget: "commonjs2",
    library: "redux-router-director",
    path: path.join(__dirname, "../dist"),
    filename: "index.js"
  },
  externals: {
    "director": "director",
    "react": "react",
    "redux":"redux",
    "react-redux": "react-redux"
  },
  cache: false,
  devtool: 'sourcemap',
  optimization: {
    minimize: false
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.rules.push({
  test: /\.(js|jsx)$/,
  use: {
    loader: 'babel-loader'
  }
});

module.exports = config;
