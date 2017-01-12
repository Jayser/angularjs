export default () => {
    return {
        restrict: 'A',
        controller: class {
            constructor(IdentityService) {
                'ngInject';

                this.isAuthenticated = IdentityService.isAuthenticated();
            }
        },
        link(scope, element, attrs, controller) {
            !controller.isAuthenticated && element.remove();
        }
    }
};