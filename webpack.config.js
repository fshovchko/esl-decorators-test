const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: [path.resolve(__dirname, './src/index.js'), path.resolve(__dirname, './src/index.css')],

  mode: 'development',
  devtool: 'source-map',

  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    open: true,
    compress: true,
    port: 9000,
  },

  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, './dist')
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      minify: true
    }),
  ],

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  }
}
