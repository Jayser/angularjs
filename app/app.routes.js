export default ($locationProvider, $stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
        .state('home', {
            url: '/',
            component: 'homeScreen'
        })
        .state('about', {
            url: "/about",
            component: 'aboutScreen',
            permissions: {
                roles: ['ADMIN']
            }
        })
        .state('blog', {
            url: "/blog",
            component: "blogScreen"
        })
        .state('style-guide', {
            url: '/style-guide',
            component: 'styleGuideScreen'
        })
        .state('login', {
            url: '/login',
            component: 'loginScreen',
            permissions: {
                authRequired: false
            }
        })
        .state('404', {
            url: '/404',
            component: 'notFoundScreen'
        })
        .state('access-denied', {
            url: '/access-denied',
            component: 'accessDeniedScreen'
        });

    $urlRouterProvider.otherwise('404');
    $locationProvider.html5Mode(true).hashPrefix('!');
};