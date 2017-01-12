import template from './is-authorized.jade';

export default {
    template: template(),
    transclude: true,
    controller: class IsAuthorized {
        constructor(IdentityService) {
            'ngInclude';

            this.IdentityService = IdentityService;
        }

        isAuthenticated() {
            return this.IdentityService.isAuthenticated();
        }
    }
};