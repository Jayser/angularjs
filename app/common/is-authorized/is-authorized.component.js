import template from './is-authorized.jade';

export default {
    template: template(),
    transclude: true,
    controller: class IsAuthorized {
        constructor(AuthService) {
            'ngInclude';

            this.AuthService = AuthService;
        }

        isAuthorized() {
            return this.AuthService.isAuthorized();
        }
    }
};