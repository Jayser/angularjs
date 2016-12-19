const cfgBase = require('../index');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.jade$/,
                loader: 'pug'
            },
            {
                test: /\.js$/,
                include: [cfgBase.paths.source],
                loaders: ['babel?extends=' + cfgBase.paths.babel]
            },
            {
                test: /\.(?:scss|css)$/,
                loader: 'ignore'
            }
        ]
    }
};