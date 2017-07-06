const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const SRC_DIR = path.join(__dirname, '/client/src')
const DIST_DIR = path.join(__dirname, '/client/dist')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:1337/__webpack_hmr&timeout=20000',
    './client/src/index.js'
  ],
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: SRC_DIR
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loaders: ['babel-loader?cacheDirectory=true'],
        include: SRC_DIR
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: { modules: true }
          }
        ],
        include: SRC_DIR
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({ filename: 'css/[name].css', disable: false, allChunks: true })
  ],
  devServer: {
    inline: true,
    contentBase: DIST_DIR,
    hot: true,
    historyApiFallback: true
  }
}
