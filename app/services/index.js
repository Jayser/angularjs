import AuthService from './auth.service';

export default angular
    .module('app.services', [])
    .factory('AuthService', AuthService)
    .name