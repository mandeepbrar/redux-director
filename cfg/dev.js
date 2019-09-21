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
    path: path.join(__dirname, "../build"),
    filename: "index.js"
  },
  externals: {
    "director": "director",
    "react": "react",
    "react-redux": "react-redux"
  },
  cache: false,
  devtool: 'sourcemap',
  plugins: [
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

/*
test: /\.(js|jsx)$/,
loader: 'babel',
include: [].concat(
  config.additionalPaths,
  [ path.join(__dirname, '/../src') ]
)

module.exports = config;
test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }

      */