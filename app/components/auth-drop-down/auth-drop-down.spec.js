import AuthDropDownComponent from './auth-drop-down.component';

describe('auth-drop-down component', () => {
    const AuthService = jasmine.createSpyObj('AuthService', ['isAuthorized', 'getCurrentUser', 'logout']);
    const sut = new AuthDropDownComponent.controller(AuthService);

    it('AuthService should be initialized', () => {
        expect(sut.constructor.length).toBe(1);
        expect(sut.AuthService).toBe(AuthService);
    });

    it('user should be initialized', () => {
        const user = '{ "name": "admin" }';

        AuthService.getCurrentUser.and.returnValue('{ "name": "admin" }');

        sut.$onInit();

        expect(sut.user).toBe(user);
    });

    it('Should show content is user authorized', () => {
        AuthService.isAuthorized.and.returnValue(true);

        expect(sut.isAuthorized()).toBe(true);
    });

    it('Should hide content is user unauthorized', () => {
        AuthService.isAuthorized.and.returnValue(false);

        expect(sut.isAuthorized()).toBe(false);
    });

    it('should have logout', () => {
        sut.logout();

        expect(AuthService.logout).toHaveBeenCalled();
    });
});