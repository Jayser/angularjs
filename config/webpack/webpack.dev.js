const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const webpackValidator = require('webpack-validator');
const commonWebpackCfg = require('./webpack.common');
const cfgBase = require('../index');

const cfg = webpackMerge(commonWebpackCfg, {
    entry: [
        'Webpack-dev-server/client?http://localhost:' + cfgBase.port,
        'Webpack/hot/only-dev-server',
        './index.js'
    ],
    output: {
        publicPath: 'http://localhost:' + cfgBase.port + '/'
    },
    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract("style", ["css", "resolve-url", "postcss"])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/main.css", { disable: true }),
        new Webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin(cfgBase.htmlWebpackPlugin)
    ],
    devtool: 'inline-source-map',
    devServer: {
        port: cfgBase.port
    }
});

module.exports = webpackValidator(cfg);