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
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract("style", ["css", "resolve-url", "postcss"])
            }
        ]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
    ]
});

module.exports = webpackValidator(cfg);