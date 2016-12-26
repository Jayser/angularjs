const resolve = require('path').resolve;

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8000;
const PUBLIC_PATH = NODE_ENV === 'production' ? './' : 'http://localhost:' + PORT + '/';

const cfg = {
    paths: {
        root: resolve(),
        source: resolve('app'),
        output: resolve('build'),
        reports: resolve('reports'),
        nodeModules: resolve('node_modules'),
        coverage: resolve('reports/coverage'),
        babel: resolve('config/babel/.babelrc'),
        eslint: resolve('config/eslint/.eslintrc'),
        testWebpackConfig: resolve('config/webpack/test'),
        postCss: resolve('config/postcss/postcss.config.js'),
        mocks: resolve('app/mocks'),
        tests: resolve('config/karma/index.js'),
        img: './img',
        fonts: './fonts'
    },
    proxy: {
        '/api': {
            target: 'http://sarhan-blog.herokuapp.com',
            secure: false,
            changeOrigin: true
        }
    },
    styleLintPlugin: {
        configFile: resolve('.stylelintrc'),
        files: ['../app/**/*.scss'],
        failOnError: false,
    },
    htmlWebpackPlugin: {
        title: 'AngularJS',
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
    isCoverage: NODE_ENV === 'test:coverage',
    isTestWatch: NODE_ENV === 'test:watch',
};

module.exports = cfg;