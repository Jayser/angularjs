const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cfgBase = require('../base');

module.exports = {
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
        new Webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        port: cfgBase.port
    }
};