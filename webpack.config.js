const path = require('path');

const clientConfig = {
  mode: 'development',
  entry: [path.join(__dirname, '/client/index.jsx')],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public/dist'),
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  devtool: 'cheat-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

const serverConfig = {
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: [path.join(__dirname, '/server/index.js')],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/server'),
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = [clientConfig, serverConfig];
