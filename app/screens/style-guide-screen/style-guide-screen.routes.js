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
        .state('style-guide.tabs', {
            url: '/tabs',
            component: 'tabsTest'
        });

    $urlRouterProvider.otherwise('/style-guide');
}