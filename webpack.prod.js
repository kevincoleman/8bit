const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    mode: "production",
    optimization: {
        minimizer: [
            new UglifyJsWebpackPlugin({
                sourceMap: false,
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
};
