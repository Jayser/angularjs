const webpackTestCfg = require('../webpack/webpack.test');
const cfgBase = require('../index');

module.exports = function (config) {
    config.set({
        // base path used to resolve all patterns
        basePath: cfgBase.paths.source,

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // Browsers for run
        browsers: ['PhantomJS'],

        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec', 'coverage'],

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-coverage',
            'karma-spec-reporter'
        ],

        // list of files/patterns to load in the browser
        files: [cfgBase.paths.tests],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            [cfgBase.paths.tests]: ['webpack', 'coverage']
        },

        // Webpack Config at ./webpack/test.js
        webpack: webpackTestCfg,

        // Webpack please don't spam the console when running in karma!
        webpackMiddleware: { stats: 'errors-only'},

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
        autoWatch: true,

        // if true, Karma runs tests once and exits
        singleRun: true
    });
};