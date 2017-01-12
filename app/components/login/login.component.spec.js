import LoginComponent from './login.component';

describe('Login', () => {
    const $state = jasmine.createSpyObj('$state', ['go']);
    const promise = jasmine.createSpyObj('promise', ['then']);
    const AuthService = jasmine.createSpyObj('AuthService', ['login']);
    const sut = new LoginComponent.controller($state, AuthService);

    beforeEach(() => {
        AuthService.login.and.returnValue(promise);
    });

    it('should be initialized', () => {
        expect(sut.constructor.length).toBe(2);

        expect(sut.$state).toBe($state);
        expect(sut.AuthService).toBe(AuthService);
    });

    describe('submit form', () => {
        const email = 'admin@admin.com';
        const password = 'admin';

        beforeEach(() => {
            promise.then.and.callFake(cb => cb());
        });

        it('track all passed arguments', () => {
            AuthService.login(email, password);
            expect(AuthService.login).toHaveBeenCalledWith('admin@admin.com', 'admin');
        });

        it('should submitted form', () => {
            sut.submitForm({ $valid: true });

            expect(AuthService.login).toHaveBeenCalled();
        });
    });
});