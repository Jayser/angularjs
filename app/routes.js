export default ($locationProvider, $stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
        .state('home', {
            url: '/',
            component: 'homeScreen'
        })
        .state('header', {
            url: '/header',
            component: 'header'
        })
        .state('test2', {
            url: '/test2',
            component: 'test2'
        });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true).hashPrefix('!');
};