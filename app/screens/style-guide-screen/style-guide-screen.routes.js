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
        .state('style-guide.lazy-load', {
            url: '/lazy-load',
            component: 'lazyLoad',
            resolvePolicy: { deps: { when: "EAGER" } },
            resolve: {
                deps: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    const dfd = $q.defer();

                    require.ensure([], () => {
                        const moduleName = require('../../components/lazy-load/lazy-load.module').default;

                        $ocLazyLoad.load({ name: moduleName });

                        dfd.resolve(moduleName);
                    });

                    return dfd.promise;
                }]
            }
        });

    $urlRouterProvider.otherwise('/style-guide');
}