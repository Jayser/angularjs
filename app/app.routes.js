export default ($locationProvider, $stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
        .state('home', {
            url: '/',
            component: 'homeScreen'
        })
        .state('about', {
            url: "/about",
            component: 'aboutScreen'
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
            component: 'loginScreen'
        });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true).hashPrefix('!');
};