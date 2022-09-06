const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',

  entry: {
    index: './src/index.js',
    // load: './src/load.js',
    // DOMElements: './src/DOMElements.js',
  },

  // for webpack-dev-server
  devServer: {
    static: './dist',
  },

  module: {
    rules: [
      // load css
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },

      // load images
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

    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    // new HtmlWebpackTagsPlugin({
    //   tags: ['./src/styles/style.css'],
    //   append: true,
    // }),
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'static/img/[hash][ext][query]',

    clean: true,
  },
};
