import angular from 'angular';
import uiRouter from 'angular-ui-router';

import CommonModule from './components/common';
import ComponentsModule from './components';
import ScreensModule from './screens';

import routes from './routes';
import './index.scss';

export default angular
    .module('app', [
        CommonModule,
        ComponentsModule,
        ScreensModule,
        uiRouter
    ])
    .config(routes)
    .name;