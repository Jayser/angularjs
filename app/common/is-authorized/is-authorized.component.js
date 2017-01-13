import template from './is-authorized.jade';
import IsAuthorizedController from './is-authorized.controller';

export default {
    template: template(),
    bindings: {
        isAuthenticated: '<',
        isInAnyRole: '<'
    },
    transclude: true,
    controller: IsAuthorizedController
};