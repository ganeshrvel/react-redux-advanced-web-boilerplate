'use strict';

const express = require('express');
const IS_DEV = process.env.NODE_ENV !== 'production';
const PATHS = require('../app/utils/paths');
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const CLIENT_PORT = process.env.CLIENT_PORT || 3000;

module.exports = function() {
  return {
    contentBase: [PATHS.dist],
    hot: IS_DEV,
    compress: !IS_DEV,
    port: CLIENT_PORT,
    proxy: {
      '/api': `http://localhost:${SERVER_PORT}`
    },
    watchOptions: IS_DEV
      ? {
          aggregateTimeout: 300,
          ignored: /node_modules/,
          poll: 100
        }
      : {},
    historyApiFallback: IS_DEV
      ? {
          verbose: true,
          disableDotRule: false
        }
      : {},
    after(app) {
      app.get('*', function(req, res) {
        res
          .status(404)
          .end(`{"status": "error", "message": "404 | Page not found"}`);
      });
    },
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: true,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      publicPath: true
    },
    inline: true,
    lazy: false,
    headers: { 'Access-Control-Allow-Origin': '*' }
  };
};
