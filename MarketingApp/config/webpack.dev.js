const path = require('path')
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3002/',
  },
  devServer: {
    port: 3002,
    historyApiFallback: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'MarketingApp',
      filename: 'remoteEntry.js',
      exposes: {
        './bootstrap': path.resolve(__dirname, '..', 'src', 'bootstrap'),
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'public', 'index.html'),
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
