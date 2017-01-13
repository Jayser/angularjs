import IsAuthorizedController from './is-authorized.controller';

export default () => {
    return {
        restrict: 'A',
        scope: {
            isAuthenticated: '<',
            isInAnyRole: '<'
        },
        controllerAs: '$ctrl',
        bindToController: true,
        controller: IsAuthorizedController,
        link(scope, element, attrs, controller) {
            !controller.isAllowed() && element.remove();
        }
    }
};