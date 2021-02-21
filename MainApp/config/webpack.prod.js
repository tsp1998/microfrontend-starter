const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domains = {
  HeaderApp: process.env.HEADER_APP,
  MarketingApp: process.env.MARKETING_APP,
};

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/MainApp/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'MainApp',
      remotes: {
        HeaderApp: `HeaderApp@${domains.HeaderApp}/remoteEntry.js`,
        MarketingApp: `MarketingApp@${domains.MarketingApp}/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
