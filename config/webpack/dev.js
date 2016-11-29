const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const webpackValidator = require('webpack-validator');
const commonCfg = require('./common');
const cfgBase = require('../base');

const cfg = webpackMerge(commonCfg, {
    entry: [
        'Webpack-dev-server/client?http://localhost:' + cfgBase.port,
        'Webpack/hot/only-dev-server',
        './app.module.js'
    ],
    output: {
        publicPath: 'http://localhost:' + cfgBase.port + '/'
    },
    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract("style", ["css", "postcss"])
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