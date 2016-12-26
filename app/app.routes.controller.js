export default ($rootScope, AuthService, $state, $scope, CONSTANTS) => {
    'ngInject';

    if(!AuthService.isAuthorized()) {
        $state.go('login');
    }

    $scope.$on('$destroy', $rootScope.$on(CONSTANTS.EVENTS.USER_LOGIN, (scope, data) => {
        console.log('Login!', data);
    }));

    $scope.$on('$destroy', $rootScope.$on(CONSTANTS.EVENTS.USER_LOGOUT, () => {
        $state.go('login');
    }));
}