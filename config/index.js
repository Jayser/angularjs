const path = require('path');
const normalize = path.normalize;

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8000;
const PUBLIC_PATH = NODE_ENV === 'production' ? '/angularjs/build/' : 'http://localhost:' + PORT + '/';
const root = path.resolve(__dirname, '../');

const cfg = {
    paths: {
        root: root,
        source: normalize(`${root}/app`),
        output: normalize(`${root}/build`),
        reports: normalize(`${root}/reports`),
        nodeModules: normalize(`${root}/node_modules`),
        coverage: normalize(`${root}/reports/coverage`),
        babel: normalize(`${root}/config/babel/.babelrc`),
        eslint: normalize(`${root}/config/eslint/.eslintrc`),
        testWebpackConfig: normalize(`${root}/config/webpack/test`),
        postCss: normalize(`${root}/config/postcss/postcss.config.js`),
        mocks: normalize(`${root}/app/mocks`),
        tests: normalize(`${root}/config/karma/index.js`),
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
        configFile: normalize(`${root}/.stylelintrc`),
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
    env: {
        NODE_ENV: NODE_ENV,
        isDevelop: NODE_ENV === 'development',
        isProd: NODE_ENV === 'production',
        isMock: NODE_ENV === 'mock',
        isCoverage: NODE_ENV === 'test:coverage',
        isTestWatch: NODE_ENV === 'test:watch',
    }
};

module.exports = cfg;