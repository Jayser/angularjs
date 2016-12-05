const path = require('path');

const mockCfg = require('./mock/mock.config');
const packageJSON = require('../package.json');

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8000;

let PUBLIC_PATH = 'http://localhost:' + PORT + '/';
if (NODE_ENV === 'production') {
    PUBLIC_PATH = './';
}

const cfg = {
    paths: {
        root: path.resolve(),
        source: path.resolve('app'),
        output: path.resolve('build'),
        reports: path.resolve('reports'),
        coverage: path.resolve('reports/coverage'),
        babel: path.resolve('config/babel/.babelrc'),
        eslint: path.resolve('config/eslint/.eslintrc'),
        testWebpackConfig: path.resolve('config/webpack/test'),
        postCss: path.resolve('config/postcss/postcss.config.js'),
        tests: '**/*.spec.js',
        img: './img',
        fonts: './fonts'
    },
    styleLintPlugin: {
        configFile: path.resolve('config/stylelint/.stylelintrc'),
        files: ['../app/**/*.scss'],
        failOnError: false,
    },
    htmlWebpackPlugin: {
        title: packageJSON.name,
        template: 'index.jade',
        favicon: 'favicon.ico',
        inject: 'body',
        hash: true
    },
    webpackDevServer: {
        publicPath: PUBLIC_PATH,
        historyApiFallback: true,
        displayModules: true,
        displayErrorDetails: true,
        displayReasons: true,
        displayChunks: true,
        hot: true,
        stats: { colors: true }
    },
    publicPath: PUBLIC_PATH,
    port: PORT,
    env: NODE_ENV,
    isDevelop: NODE_ENV === 'development',
    isProd: NODE_ENV === 'production',
    isMock: NODE_ENV === 'mock',
    pkg: packageJSON
};

if (cfg.isMock) {
    cfg.webpackDevServer.setup = mockCfg;
}

module.exports = cfg;