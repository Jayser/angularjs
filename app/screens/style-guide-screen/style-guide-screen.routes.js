import { lazyLoadCounter, lazyLoadTabs } from './style-guide-screen.lazy-load-routes';

export default ($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
        .state('style-guide.counter', {
            url: '/counter',
            component: 'counter'
        })
        .state('style-guide.drop-down', {
            url: '/drop-down',
            component: 'dropDown'
        })
        .state('style-guide.date-picker', {
            url: '/date-picker',
            component: 'datePicker'
        })
        .state('style-guide.bindings', {
            url: '/bindings',
            component: 'bindings'
        })
        .state('style-guide.tabs', {
            url: '/tabs',
            component: 'tabsTest',
            resolvePolicy: { deps: { when: "EAGER" } },
            resolve: {deps: lazyLoadTabs}
        })
        .state('style-guide.lazy-load-counter', {
            url: '/lazy-load-counter',
            component: 'lazyLoadCounter',
            /*
             * resolvePolicy property should be for lazy loading.
             * resolvePolicy change order try to execute deps as initial property
             */
            resolvePolicy: { deps: { when: "EAGER" } },
            resolve: { deps: lazyLoadCounter }
        });

    $urlRouterProvider.otherwise('/style-guide');
}