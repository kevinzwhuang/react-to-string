const path = require('path');
const webpackConfig = {
  entry: './src/react-to-string',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-to-string.js',
    library: 'reactToString',
    libraryTarget: 'umd'
  }
};

module.exports = webpackConfig;
