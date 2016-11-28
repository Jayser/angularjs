const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cfgBase = require('../base');

module.exports = {
    entry: [
        './app.module.js'
    ],
    output: {
        publicPath: './'
    },
    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract("style", ["css?minimize&sourceMap", "postcss"])
            }
        ]
    },
    plugins: [
        new Webpack.optimize.DedupePlugin(),
        new Webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("css/main.css"),
    ],
    devtool: 'inline-source-map',
    devServer: {
        port: cfgBase.port
    }
};