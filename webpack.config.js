const Webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackMerge = require('webpack-merge');
const webpackValidator = require('webpack-validator');

const cfgBase = require('./config/base');
const cfgDev = require('./config/webpack/dev');
const cfgProd = require('./config/webpack/prod');

const cfg = webpackMerge({
    context: cfgBase.paths.source,
    output: {
        path: cfgBase.paths.output,
        filename: 'js/[name].js?[hash]'
    },
    resolve: {
        root: cfgBase.paths.source,
        extensions: ['', '.scss', '.css', '.js']
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                include: [cfgBase.paths.source]
            }
        ],
        loaders: [
            {
                test: /\.jade$/,
                loader: 'pug'
            },
            {
                test: /\.js$/,
                include: [cfgBase.paths.source],
                loaders: ['babel?extends=' + cfgBase.paths.babel]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff&name=' + cfgBase.paths.fonts + '/[name].[ext]?[hash]'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url?&limit=10000&name=' + cfgBase.paths.img + '/[name].[ext]?[hash]'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file?name=' + cfgBase.paths.fonts + '/[name].[ext]?[hash]'
            }
        ]
    },
    postcss: cfgBase.postcss,
    plugins: [
        new require('force-case-sensitivity-webpack-plugin'),
        new Webpack.NoErrorsPlugin(),
        new CleanWebpackPlugin([cfgBase.paths.output]),
        new Webpack.DefinePlugin({
            IS_DEVELOPMENT: cfgBase.isDevelop,
            IS_PROD: cfgBase.isProd
        }),
        new HtmlWebpackPlugin({
            title: cfgBase.pkg.name,
            template: 'index.jade',
            favicon: 'assets/img/favicon.ico',
            hash: true
        })
    ],
    eslint: {
        configFile: 'config/eslint/.eslintrc'
    }
}, cfgBase.isDevelop ? cfgDev : cfgProd);

module.exports = webpackValidator(cfg);