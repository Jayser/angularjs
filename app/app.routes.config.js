export default ($rootScope, $transitions, AuthService, IdentityService) => {
    'ngInject';

    // executed once, try to authentication from the cookie
    AuthService.authenticate();

    const requiresAuthCriteria = {
        to(state) {
            if (state.name !== 'login') {
                $rootScope.returnToState = state;
            }

            $rootScope.toState = state;

            return state.permissions;
        }
    };

    const requiresAuthRedirect = () => {
        const permissions = $rootScope.toState.permissions;
        const hasRoles = permissions.roles && permissions.roles.length;
        const authRequired = permissions.authRequired;

        const isInAnyRole = hasRoles && IdentityService.isInAnyRole(permissions.roles);
        const isAuthenticated = IdentityService.isAuthenticated();

        if ((authRequired === true || hasRoles) && !isAuthenticated) {
            return AuthService.isUnauthenticated();
        }

        if (authRequired === false && isAuthenticated) {
            return AuthService.returnToState();
        }

        if (isAuthenticated && !isInAnyRole) {
            return AuthService.isAccessDenied();
        }
    };

    $transitions.onSuccess(requiresAuthCriteria, requiresAuthRedirect);
}