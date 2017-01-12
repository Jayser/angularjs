import AuthService from './auth.service';

describe('AuthService', () => {
    const CONSTANTS = {
        URLS: {
            AUTH: '/rest/login'
        },
        SESSION_STORAGE: {
            AUTH: 'authenticate'
        }
    };

    const $state = jasmine.createSpyObj('$state', ['go', 'reload', '']);
    const $rootScope = {};
    const $sessionStorage = {};
    const IdentityService = jasmine.createSpyObj('IdentityService', ['identity', 'authenticate']);
    const promise = jasmine.createSpyObj('promise', ['then']);

    const sut = new AuthService($state, $rootScope, $sessionStorage, IdentityService, CONSTANTS);

    beforeEach(() => {
        IdentityService.identity.and.returnValue(promise);
        $state.current = null;
    });

    it('Should be initialized', () => {
        expect(sut.constructor.length).toEqual(5);
    });

    describe('Should be changed state to', () => {
        it('default', () => {
            sut._goTo();
            expect($state.go).toHaveBeenCalledWith('home');
        });

        it('transmitted', () => {
            sut._goTo('login');
            expect($state.go).toHaveBeenCalledWith('login');
        });
    });

    it('Should be authenticate', () => {
        sut.authenticate();

        expect(IdentityService.authenticate).toHaveBeenCalledWith(angular.fromJson(sut.identity));
    });

    describe('Should be redirect to', () => {
        beforeEach(() => {
            sut._goTo = jasmine.createSpy('_goTo');
        });

        it('login', () => {
            sut.isUnauthenticated();

            expect(sut._goTo).toHaveBeenCalledWith('login');
        });

        it('access denied screen', () => {
            sut.isAccessDenied();

            expect(sut._goTo).toHaveBeenCalledWith('access-denied');
        });

        it('previews screen by default', () => {
            sut.returnToState();

            expect(sut._goTo).toHaveBeenCalledWith(undefined);
        });

        it('previews screen', () => {
            sut.$rootScope = { returnToState: { name: 'someName' } };

            sut.returnToState();

            expect(sut._goTo).toHaveBeenCalledWith('someName');
        });
    });

    it('Should be logout', () => {
        sut.logout();

        expect(IdentityService.authenticate).toHaveBeenCalledWith(null);
        expect($state.reload).toHaveBeenCalledWith($state.current);
    });

    describe('Login', () => {
        const email = 'admin@admin.com';
        const password = 'admin';
        const resMock = 'ADMIN';

        beforeEach(() => {
            promise.then.and.callFake(function (cb) {
                cb(resMock);
            });
        });

        it('should be success', () => {
            sut.returnToState = jasmine.createSpy('returnToState');
            sut.login(email, password);

            expect(IdentityService.identity).toHaveBeenCalled();
            expect(sut.returnToState).toHaveBeenCalled();
        });
    });
});