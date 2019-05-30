const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = (env, argv) => {
  const mode = argv.mode || 'development'

  return {
    mode: mode || 'development',
    entry: {
      app: './src/js/main.jsx'
    },
    output: {
      path: path.join(__dirname, '/build'),
      filename: '[name].bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          use: 'babel-loader',
          test: /\.jsx?$/,
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [
            mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    optimization: {
      // minimize: false
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/index.html'),
        filename: path.join(__dirname, '/build/index.html'),
        chunks: ['app'],
        hash: true
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/404.html'),
        filename: path.join(__dirname, '/build/404.html'),
        chunks: [],
        hash: true
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(mode)
      })
    ],
    devServer: {
      historyApiFallback: true
    }
  }
}
