const webpackMerge = require('webpack-merge');
const webpackValidator = require('webpack-validator');
const commonCfg = require('./common');
const devCfg = require('./dev');

const cfg = webpackMerge(commonCfg, devCfg);

module.exports = webpackValidator(cfg);