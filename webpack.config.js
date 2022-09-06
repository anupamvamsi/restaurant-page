const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',

  entry: {
    index: './src/index.js',
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
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'static/img/[hash][ext][query]',

    clean: true,
  },
};
