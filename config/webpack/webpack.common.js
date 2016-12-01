const Webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const cfgBase = require('../index');

module.exports = {
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
                loaders: ['ng-annotate', 'babel?extends=' + cfgBase.paths.babel]
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
    postcss: cfgBase.paths.postCss,
    plugins: [
        new CleanWebpackPlugin([cfgBase.paths.output, cfgBase.paths.reports], {
            root: cfgBase.paths.root
        }),
        new require('force-case-sensitivity-webpack-plugin'),
        new Webpack.NoErrorsPlugin(),
        new Webpack.DefinePlugin({
            IS_DEVELOPMENT: cfgBase.isDevelop,
            IS_PROD: cfgBase.isProd
        }),
        new StyleLintPlugin(cfgBase.styleLintPlugin)
    ],
    eslint: { configFile: cfgBase.paths.eslint }
};