import AppConfig from './app.config';
import AppRoutes from './app.routes';
import AppRoutesController from './app.routes.controller';
import Constants from './app.constants';

import ServicesModule from './services';
import FiltersModule from './filters';
import CommonModule from './components/common';
import ComponentsModule from './components';
import ScreensModule from './screens';

import './index.scss';

export default angular
    .module('app', [
        FiltersModule,
        ServicesModule,
        CommonModule,
        ComponentsModule,
        ScreensModule,
        'ngCookies',
        'ui.router'
    ])
    .controller('RoutesController', AppRoutesController)
    .constant('CONSTANTS', Constants)
    .config(AppConfig)
    .config(AppRoutes)
    .name;