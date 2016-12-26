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
        .state('styleguide', {
            url: '/styleguide',
            component: 'styleGuideScreen'
        });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true).hashPrefix('!');
};