const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    index: './src/index.js',
  },

  devServer: {
    static: './dist',
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
  },
};
