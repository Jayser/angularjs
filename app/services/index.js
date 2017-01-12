import AuthService from './auth.service';
import BlogService from './blog.service';
import LazyLoadService from './lazy-load.service';
import IdentityService from './identity.service';

export default angular
    .module('app.services', [])
    .service('AuthService', AuthService)
    .service('BlogService', BlogService)
    .service('LazyLoadService', LazyLoadService)
    .service('IdentityService', IdentityService)
    .name