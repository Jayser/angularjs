const webpackTestCfg = require('../webpack/webpack.test');
const cfgBase = require('../index');

function karmaMerge(baseCfg, extCfg) {
    return cfgBase.env.isCoverage ? baseCfg.concat(extCfg) : baseCfg;
}

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
        reporters: karmaMerge(['spec'], ['coverage']),

        plugins: karmaMerge([
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-spec-reporter'],
            ['karma-coverage']),

        // list of files/patterns to load in the browser
        files: [cfgBase.paths.tests],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            [cfgBase.paths.tests]: ['webpack', 'sourcemap']
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
        autoWatch: cfgBase.env.isTestWatch,

        // if true, Karma runs tests once and exits
        singleRun: !cfgBase.env.isTestWatch
    });
};