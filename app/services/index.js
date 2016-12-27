import AuthService from './auth.service';
import BlogService from './blog.service';

export default angular
    .module('app.services', [])
    .factory('AuthService', AuthService)
    .service('BlogService', BlogService)
    .name