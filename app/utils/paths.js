'use strict';

const path = require('path');
const root = process.cwd();
module.exports = {
  root: root,
  app: path.resolve(root, './app'),
  dist: path.resolve(root, './dist'),
  nodeModules: path.resolve(root, './node_modules')
};
