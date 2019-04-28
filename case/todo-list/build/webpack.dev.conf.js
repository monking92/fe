
const webpackBaseConfig = require('./webpack.base.conf')
const mergeWebpack = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')

module.exports = mergeWebpack(webpackBaseConfig, {
  mode: 'development',
  // development 模式下 devtool 默认 eval
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  devServer: {
    // publicPath: path.resolve(__dirname, '..', 'dist'),
    compress: true,
    host: '0.0.0.0',
    useLocalIp: true,
    port: 9090,
    open: true,
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    },
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})