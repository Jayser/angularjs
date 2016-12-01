const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const webpackValidator = require('webpack-validator');
const commonWebpackCfg = require('./webpack.common');
const cfgBase = require('../index');

const cfg = webpackMerge(commonWebpackCfg, {
    entry: {
        app: './app.module.js',
        vendor: [
            'angular',
            'angular-ui-router'
        ]
    },
    output: {
        publicPath: './'
    },
    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract("style", ["css?minimize&sourceMap", "resolve-url", "postcss"])
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