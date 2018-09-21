'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const IS_DEV = process.env.NODE_ENV !== 'production';
const devServer = require('./devServer.config.js');
const PATHS = require('../app/utils/paths');
const webpackProdConfig = require('./webpack.prod.config.js');
const webpackDevConfig = require('./webpack.dev.config.js');

const webpackBaseConfig = {
  mode: process.env.NODE_ENV,
  output: {
    path: PATHS.dist,
    filename: '[name].[hash].bundle.js'
  },
  devServer: devServer(),
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [PATHS.app, 'node_modules'],
    alias: {
      app: PATHS.app
    }
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(PATHS.app, 'public/images/favicon.ico'),
        to: path.join(PATHS.dist, './')
      }
    ]),
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV
    }),
    new HtmlWebpackPlugin({
      template: path.join(PATHS.app, 'index.html'),
      chunksSortMode: 'none'
    }),
    new webpack.DefinePlugin({}),
    new webpack.NamedModulesPlugin()
  ]
};

module.exports = merge.smart(
  webpackBaseConfig,
  IS_DEV ? webpackDevConfig : webpackProdConfig
);
