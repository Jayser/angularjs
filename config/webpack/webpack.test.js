const webpackMerge = require('webpack-merge');
const webpackValidator = require('webpack-validator');
const commonWebpackCfg = require('./webpack.common');
const devCfg = require('./webpack.dev');

const cfg = webpackMerge(commonWebpackCfg, devCfg);

module.exports = webpackValidator(cfg);