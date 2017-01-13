import AuthDropDownComponent from './auth-drop-down.component';

describe('auth-drop-down component', () => {
    const IdentityService = jasmine.createSpyObj('IdentityService', ['isAuthenticated', 'getIdentity']);
    const AuthService = jasmine.createSpyObj('AuthService', ['logout']);

    const sut = new AuthDropDownComponent.controller(AuthService, IdentityService);

    it('should be initialized', () => {
        expect(sut.constructor.length).toBe(2);
    });

    it('user should be initialized', () => {
        const identity = {
            email: "admin@admin.com",
            roles: ["ADMIN"],
            token: "someToken"
        };

        IdentityService.getIdentity.and.returnValue(identity);

        sut.$onInit();

        expect(sut.user).toBe(identity);
    });

    it('Should show content is user authorized', () => {
        IdentityService.isAuthenticated.and.returnValue(true);
        expect(sut.isAuthenticated()).toBe(true);
    });

    it('Should hide content is user unauthorized', () => {
        IdentityService.isAuthenticated.and.returnValue(false);
        expect(sut.isAuthenticated()).toBe(false);
    });

    it('should have logout', () => {
        sut.logout();
        expect(AuthService.logout).toHaveBeenCalled();
    });
});