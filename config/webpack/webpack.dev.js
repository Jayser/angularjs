const Webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackValidator = require('webpack-validator');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const commonWebpackCfg = require('./webpack.common');
const cfgBase = require('../index');

const cfg = webpackMerge(commonWebpackCfg, {
    entry: {
        app: [
            'Webpack-dev-server/client?http://localhost:' + cfgBase.port,
            'Webpack/hot/dev-server'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                include: cfgBase.paths.source,
                loader: ExtractTextPlugin.extract("style", ["css", "resolve-url", "sass?sourceMap"])
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("style", ["css", "postcss"])
            }
        ]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
    ]
});

module.exports = webpackValidator(cfg);