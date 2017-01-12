import AppCfg from './app.config';
import AppRoutesCfg from './app.routes';
import AppRoutesInterceptorCfg from './app.routes.config';
import Constants from './app.constants';

import ServicesModule from './services';
import FiltersModule from './filters';
import CommonModule from './common';
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
        'ui.router',
        'oc.lazyLoad',
        'ngStorage'
    ])
    .constant('CONSTANTS', Constants)
    .config(AppCfg)
    .config(AppRoutesCfg)
    .run(AppRoutesInterceptorCfg)
    .name;