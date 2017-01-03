import AuthService from './auth.service';
import BlogService from './blog.service';
import LazyLoadService from './lazy-load.service';

export default angular
    .module('app.services', [])
    .factory('AuthService', AuthService)
    .service('BlogService', BlogService)
    .service('LazyLoadService', LazyLoadService)
    .name