const commonConfig = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => {
    const envConfig = require(`./webpack.${env.env}.js`);

    const plugins = [];

    if (env.debug) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return webpackMerge(commonConfig, envConfig, {
        plugins,
    });
};
