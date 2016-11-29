const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const webpackValidator = require('webpack-validator');
const commonCfg = require('./common');
const cfgBase = require('../base');

const cfg = webpackMerge(commonCfg, {
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
        new HtmlWebpackPlugin(Object.assign(cfgBase.htmlWebpackPlugin, {
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        })),
        new ExtractTextPlugin("css/main.css")
    ],
    devtool: 'source-map',
    devServer: { port: cfgBase.port }
});

module.exports = webpackValidator(cfg);