const path = require('path')
const VueloaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',  // production
  // 入口
  entry: {
    // 目录的拼接 类似于 join
    bundle: path.resolve(__dirname,
      './src/index.js')
  },
  // 出口
  output: {
    path: path.resolve(__dirname,'./build'),
    filename: '[name].[hash:5].js'
  },
  resolve: {
    extensions: ['.vue','.js','.jsx'],
    alias: {
      '@': path.resolve(__dirname,'./src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueloaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'./index.html')
    })
  ]
}
