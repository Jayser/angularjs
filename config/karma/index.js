require('angular');
require('angular-ui-router');
require('angular-mocks');

const context = require.context('../../app', true, /\.js$/);
context.keys().forEach(context);

