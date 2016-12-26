const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackCfg = require('./webpack.config');
const mockCfg = require('./config/mock/mock.config');
const cfgBase = require('./config');
let webpackDevServer = cfgBase.webpackDevServer;

// set proxy config
webpackDevServer.proxy = cfgBase.proxy;

// setup mocks
if (cfgBase.isMock) {
    webpackDevServer.setup = mockCfg;
}

const server = new WebpackDevServer(
    Webpack(webpackCfg),
    webpackDevServer
);

server.listen(cfgBase.port, err => {
    if (err) {
        console.log(err);
    }

    //open("http://localhost:" + webpackCfg.devServer.port + "/index.html");
    console.log('Listening at localhost:'  + cfgBase.port);
});