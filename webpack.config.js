switch (process.env.NODE_ENV) {
    case 'production':
        module.exports = require('./config/webpack/webpack.prod');
        break;
    case 'testing':
        module.exports = require('./config/webpack/webpack.test');
        break;
    case 'development':
        module.exports = require('./config/webpack/webpack.dev');
        break;
    default:
        throw new Error('You should add correct NODE_ENV');
}