const webpack = require('karma-webpack');
const cfgBase = require('../base');

module.exports = function (config) {
    config.set({
        // base path used to resolve all patterns
        basePath: cfgBase.paths.source,

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files/patterns to load in the browser
        files: [{ pattern: '**/*.spec.js', watched: false }],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/*.spec.js': ['coverage', 'webpack']
        },

        // Webpack Config at ./webpack/test.js
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.(css|scss)$/,
                        loader: "style!css!postcss"
                    },
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
            }
        },

        // Webpack please don't spam the console when running in karma!
        webpackMiddleware: { stats: 'errors-only'},

        browsers: [ 'PhantomJS' ],

        plugins: [
            webpack,
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-coverage',
            'karma-spec-reporter'
        ],

        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec', 'coverage'],
        coverageReporter: {
            dir: cfgBase.paths.coverage,
            reporters: [
                { type: 'html', subdir: 'report-html' },
            ]
        },

        // web server port
        port: cfgBase.port,

        // enable colors in the output
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // toggle whether to watch files and rerun tests upon incurring changes
        autoWatch: true
    });
};