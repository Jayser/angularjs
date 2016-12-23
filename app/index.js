import CommonModule from './components/common';
import ComponentsModule from './components';
import FiltersModule from './filters';
import ScreensModule from './screens';

import routes from './routes';
import './index.scss';

export default angular
    .module('app', [
        CommonModule,
        ComponentsModule,
        FiltersModule,
        ScreensModule,
        'ui.router'
    ])
    .config(routes)
    .name;