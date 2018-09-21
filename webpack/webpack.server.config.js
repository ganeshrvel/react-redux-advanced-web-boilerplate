const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = process.env.NODE_ENV !== 'production';
const PATHS = require('../app/utils/paths');

PATHS['server'] = path.join(PATHS.root, './server');
PATHS['build'] = path.join(PATHS.root, './build');

let plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(NODE_ENV)
    }
  }),
  new webpack.NamedModulesPlugin()
];

if (IS_DEV) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
} else {
  plugins.push(
    new CleanWebpackPlugin([`${PATHS.build}/*`], {
      root: PATHS.root
    })
  );
}

const entry = !IS_DEV
  ? ['@babel/polyfill', path.resolve(path.join(PATHS.server, './index.js'))]
  : [
      'webpack/hot/poll?1000',
      '@babel/polyfill',
      path.resolve(path.join(PATHS.server, './index.js'))
    ];

module.exports = {
  mode: 'development',
  devtool: false,
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000']
    })
  ],
  name: 'server',
  plugins: plugins,
  target: 'node',
  entry: entry,
  output: {
    publicPath: './',
    path: path.resolve(PATHS.build),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(PATHS.nodeModules)]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          babelrc: true
        }
      }
    ]
  },
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    fs: 'empty'
  }
};
