export default ($locationProvider, $stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
        .state('home', {
            url: '/',
            component: 'home'
        })
        .state('test', {
            url: '/test',
            component: 'test'
        })
        .state('test2', {
            url: '/test2',
            component: 'test2'
        });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true).hashPrefix('!');
};