export default class IsAuthorized {
    constructor(IdentityService) {
        'ngInclude';

        this.IdentityService = IdentityService;
    }

    isAllowed() {
        if (this.isInAnyRole) {
            return this.IdentityService.isInAnyRole(this.isInAnyRole)
        } else {
            return this.isAuthenticated === this.IdentityService.isAuthenticated()
        }
    }
}