const cfgBase = require('../index');

module.exports = (webpack) => [
    require('autoprefixer')({
        browsers: ['last 2 versions']
    }),
    require('precss')(),
];