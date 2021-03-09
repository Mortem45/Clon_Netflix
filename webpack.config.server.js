const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ssr/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[id].[chunkhash].js',
    libraryTarget: 'commonjs2'
  },
  performance: {
    hints: false
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    __dirname: false,
    __filename: false
  },
  devServer: {
    historyApiFallback: true,
    port: 9000
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            fallback: 'file-loader',
            name: 'images/[hash].[ext]'
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              minimize: true,
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/'
              }
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use:
        [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin(false),
    new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css'
    })
  ]
}