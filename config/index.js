const path = require('path');
const packageJSON = require('../package.json');

const NODE_ENV = process.env.NODE_ENV || 'development';

const base = {
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
    htmlWebpackPlugin: {
        title: packageJSON.name,
        template: 'index.jade',
        favicon: 'favicon.ico',
        inject: 'body',
        hash: true
    },
    env: NODE_ENV,
    isDevelop: NODE_ENV === 'development',
    isProd: NODE_ENV === 'production',
    port: process.env.PORT || 8080,
    pkg: packageJSON
};

module.exports = base;