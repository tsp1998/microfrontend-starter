const path = require('path')
const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/MarketingApp/latest/',
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
  ],
};

module.exports = merge(commonConfig, prodConfig);
