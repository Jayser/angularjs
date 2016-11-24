const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const cfg = require('./webpack.config');

new WebpackDevServer(Webpack(cfg), {
    publicPath: cfg.output.publicPath,
    historyApiFallback: true,
    inline: true,
    hot: true,
    stats: { colors: true }
}).listen(cfg.devServer.port, 'localhost', function (err) {
    if (err) { console.log(err); }

    //open("http://localhost:" + cfg.devServer.port + "/index.jade");
    console.log('Listening at localhost:'  + cfg.devServer.port);
});