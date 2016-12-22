export default ($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
        .state('blog.list', {
            url: '/list?page',
            component: "blog",
            reloadOnSearch: false
        })
        .state('blog.view', {
            url: "/view/:blogId",
            component: "blogItem",
            resolve: {
                blogData: ["BlogService", "$stateParams",
                    (BlogService, $stateParams) => BlogService.getById($stateParams.blogId)
                ]
            }
        })
        // only for admin | logged in user
        .state('blog.new', {
            url: "/new",
            component: "blogForm"
        });

    $urlRouterProvider.otherwise('/blog');
}