const path = require('path');
const glob = require('glob');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackCfg = require('./webpack.config');
const cfgBase = require('./config');

const files = glob.sync(path.resolve('app/data/mocks') + '/**/*.json');
const routes = {};

const server = new WebpackDevServer(
    Webpack(webpackCfg),
    cfgBase.webpackDevServer
);

server.listen(cfgBase.port, err => {
    if (err) {
        console.log(err);
    }

    //open("http://localhost:" + webpackCfg.devServer.port + "/index.html");
    console.log('Listening at localhost:'  + cfgBase.port);
});