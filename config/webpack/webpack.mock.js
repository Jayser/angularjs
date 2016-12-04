const webpackMerge = require('webpack-merge');
const webpackValidator = require('webpack-validator');

const commonWebpackCfg = require('./webpack.common');
const devCfg = require('./webpack.dev');
const cfgBase = require('../index');

const cfg = webpackMerge(commonWebpackCfg, devCfg, {
    proxy: {
        '/': {
            target: cfgBase.environments.mock,
            secure: false,
            changeOrigin: true
        }
    }
});

module.exports = webpackValidator(cfg);