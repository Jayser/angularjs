const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackCfg = require('./webpack.config');

new WebpackDevServer(Webpack(webpackCfg), {
    publicPath: webpackCfg.output.publicPath,
    historyApiFallback: true,
    inline: true,
    hot: true,
    stats: { colors: true }
}).listen(webpackCfg.devServer.port, 'localhost', function (err) {
    if (err) { console.log(err); }

    //open("http://localhost:" + webpackCfg.devServer.port + "/index.jade");
    console.log('Listening at localhost:'  + webpackCfg.devServer.port);
});