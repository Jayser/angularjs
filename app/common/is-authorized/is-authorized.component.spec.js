import IsAuthorizedComponent from './is-authorized.component';

describe('is-authorized component', () => {
    const AuthService = jasmine.createSpyObj('AuthService', ['isAuthorized']);
    const sut = new IsAuthorizedComponent.controller(AuthService);

    it('AuthService should be initialized', () => {
        expect(sut.constructor.length).toBe(1);
        expect(sut.AuthService).toBe(AuthService);
    });

    it('Should show content is user authorized', () => {
        AuthService.isAuthorized.and.returnValue(true);
        expect(sut.isAuthorized()).toBe(true);
    });

    it('Should hide content is user unauthorized', () => {
        AuthService.isAuthorized.and.returnValue(false);
        expect(sut.isAuthorized()).toBe(false);
    });
});