import template from './auth-drop-down.jade';

export default {
    template: template(),
    controller: class AuthDropDown {
        constructor(AuthService, IdentityService) {
            'ngInject';

            this.AuthService = AuthService;
            this.IdentityService = IdentityService;
        }

        $onInit() {
            this.user = this.IdentityService.getIdentity();
        }

        isAuthenticated() {
            return this.IdentityService.isAuthenticated();
        }

        logout() {
            this.AuthService.logout();
        }
    }
};