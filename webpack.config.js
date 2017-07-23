const path = require('path')
const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin');

const SRC_DIR = path.join(__dirname, '/client/src')
const DIST_DIR = path.join(__dirname, '/client/dist')

module.exports = {
  devtool: 'eval',
  entry: path.join(SRC_DIR, '/index.js'),
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: SRC_DIR
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        use: {
          loader: 'babel-loader?cacheDirectory=true',
          options: { ignore: '/node_modules/' }
        },
        include: SRC_DIR
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: {modules: true} }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new DashboardPlugin()
  ],
  devServer: {
    compress: true,
    contentBase: DIST_DIR,
    historyApiFallback: true,
    hot: true,
    inline: true,
    watchContentBase: true,
    headers: { "Access-Control-Allow-Origin": "*" }
  }
}
