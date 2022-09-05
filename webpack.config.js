const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    index: './src/index.js',
    load: './src/load.js',
  },

  // for webpack-dev-server
  devServer: {
    static: './dist',
  },

  // load images
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|svg|png|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/img/[hash][ext][query]',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'A Restaurant Page',
      template: './templates/index-template.html',
    }),
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'static/img/[hash][ext][query]',

    clean: true,
  },
};
