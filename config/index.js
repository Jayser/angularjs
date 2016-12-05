const resolve = require('path').resolve;

const packageJSON = require('../package.json');

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8000;
const PUBLIC_PATH = NODE_ENV === 'production' ? './' : 'http://localhost:' + PORT + '/';

const cfg = {
    paths: {
        root: resolve(),
        source: resolve('app'),
        output: resolve('build'),
        reports: resolve('reports'),
        coverage: resolve('reports/coverage'),
        babel: resolve('config/babel/.babelrc'),
        eslint: resolve('config/eslint/.eslintrc'),
        testWebpackConfig: resolve('config/webpack/test'),
        postCss: resolve('config/postcss/postcss.config.js'),
        mocks: resolve('app/data/mocks'),
        tests: '**/*.spec.js',
        img: './img',
        fonts: './fonts'
    },
    styleLintPlugin: {
        configFile: resolve('config/stylelint/.stylelintrc'),
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

module.exports = cfg;