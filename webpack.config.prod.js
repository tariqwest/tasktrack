const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './client/src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/'),
  },

  devtool: 'cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'client/src'),
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: [path.join(__dirname, 'client/src'), /flexboxgrid/],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/client/src/index.html'),
      favicon: path.join(__dirname, '/client/src/favicon.ico'),
    }),
  ],
};
