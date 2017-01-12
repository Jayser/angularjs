export default class {
    constructor($sessionStorage, $http, CONSTANTS) {
        'ngInject';

        this.$sessionStorage = $sessionStorage;
        this.$http = $http;
        this.CONSTANTS = CONSTANTS;

        this._identity = null;
        this._authenticated = false;
    }

    _setToStorage(identity) {
        if (identity) {
            this.$sessionStorage[this.CONSTANTS.SESSION_STORAGE.AUTH] = identity;
        } else {
            this.$sessionStorage.$reset({
                [this.CONSTANTS.SESSION_STORAGE.AUTH]: null
            });
        }
    }

    isAuthenticated() {
        return this._authenticated;
    }

    isInRole(role) {
        return this._authenticated && this._identity.roles && this._identity.roles.indexOf(role) != -1;
    }

    isInAnyRole(roles) {
        return Boolean(roles.filter(this.isInRole.bind(this)).length);
    }

    authenticate(identity) {
        this._identity = identity;
        this._authenticated = Boolean(identity);

        this._setToStorage(identity);

        console.info('IdentityService: authenticate:', this._authenticated);
    }

    getIdentity() {
        return this._identity;
    }

    identity(email, password) {
        return this.$http.post(this.CONSTANTS.URLS.AUTH, { email, password })
            .then(res => this.authenticate({
                email,
                roles: [ res.data ],
                token: res.headers(this.CONSTANTS.TOKEN_NAME)
            }))
    }
}