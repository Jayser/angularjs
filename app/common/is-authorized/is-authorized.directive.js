import IsAuthorizedController from './is-authorized.controller';

export default () => {
    return {
        scope: {},
        restrict: 'A',
        controllerAs: '$ctrl',
        bindToController: {
            isAuthenticated: '<',
            isInAnyRole: '<'
        },
        controller: IsAuthorizedController,
        link(scope, element, attrs, controller) {
            !controller.isAllowed() && element.remove();
        }
    }
};