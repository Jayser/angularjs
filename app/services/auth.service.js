export default class {
    constructor($state, $rootScope, $sessionStorage, IdentityService, CONSTANTS) {
        'ngInject';

        this.$state = $state;
        this.$rootScope = $rootScope;
        this.IdentityService = IdentityService;
        this.identity = $sessionStorage[CONSTANTS.SESSION_STORAGE.AUTH];
    }

    _goTo(stateName = 'home') {
        this.$state.go(stateName);
    }

    authenticate() {
        this.IdentityService.authenticate(angular.fromJson(this.identity));
    }

    isUnauthenticated() {
        this._goTo('login');
    }

    isAccessDenied() {
         this._goTo('access-denied');
    }

    returnToState() {
        this._goTo(this.$rootScope.returnToState && this.$rootScope.returnToState.name);
    }

    login(email, password) {
        this.IdentityService.identity(email, password).then(() => this.returnToState());
    }

    logout() {
        this.IdentityService.authenticate(null);
        this.$state.reload(this.$state.current);
    }
}