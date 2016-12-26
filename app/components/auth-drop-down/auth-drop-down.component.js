import template from './auth-drop-down.jade';

export default {
    template: template(),
    controller: class AuthDropDown {
        constructor(AuthService) {
            'ngInject';

            this.AuthService = AuthService;
        }

        $onInit() {
            this.user = this.AuthService.getCurrentUser();
        }

        isAuthorized() {
            return this.AuthService.isAuthorized();
        }

        logout() {
            this.AuthService.logout();
        }
    }
};