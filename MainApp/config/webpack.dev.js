const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3000/',
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'MainApp',
      remotes: {
        HeaderApp: 'HeaderApp@http://localhost:3001/remoteEntry.js',
        MarketingApp: 'MarketingApp@http://localhost:3002/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
