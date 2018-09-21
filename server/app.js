'use strict';

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const IS_PROD = process.env.NODE_ENV === 'production';
const IS_DEV = !IS_PROD;
const app = express();
const router = express.Router();
const Promise = require('bluebird');
const readFile = Promise.promisify(require('fs').readFile);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const resolve = file => path.resolve(__dirname, file);

const serve = (path, cache) =>
  express.static(resolve(path), {
    maxAge: cache && IS_PROD ? 1000 * 60 * 60 * 24 * 30 : 0
  });

app.use('/', serve('../dist', true));

const expressRouter = require('./router')({ router: router, app: app });
app.use(expressRouter);

app.get('*', function(req, res, next) {
  res.status(404).end(`{"status": "error", "message": "404 | Page not found"}`);
});

module.exports = app;
