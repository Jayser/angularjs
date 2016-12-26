import AuthService from './auth.service';

describe('AuthService', () => {
    const CONSTANTS = {
        URLS: {
            LOGIN: '/api/auth/login'
        },
        COOKIES: {
            AUTH: 'authorization.data'
        },
        EVENTS: {
            USER_LOGIN: 'userLogin',
            USER_LOGOUT: 'userLogout'
        }
    };
    const $rootScope = jasmine.createSpyObj('$rootScope', ['$emit']);
    const $cookies = jasmine.createSpyObj('$cookies', ['put', 'get', 'remove']);
    const $http = jasmine.createSpyObj('$http', ['post']);
    const promise = jasmine.createSpyObj('promise', ['then']);

    const sut = AuthService($rootScope, $cookies, $http, CONSTANTS);

    beforeEach(() => {
        $http.post.and.returnValue(promise);
    });

    describe('Login', () => {
        let returnedValue;
        const name = 'admin';
        const password = 'admin';
        const resMock = { data: { name: 'admin', _id: 'someid' } };

        beforeEach(() => {
            promise.then.and.callFake(function (cb) {
                returnedValue = cb(resMock);
                return this;
            });
        });

        it('should be success', () => {
            sut.login(name, password);

            expect($http.post).toHaveBeenCalled();
            expect(promise.then).toHaveBeenCalled();
            expect(returnedValue).toBe(resMock);
        });

        it('user should be authorized', () => {
            sut.login(name, password);

            expect($cookies.put).toHaveBeenCalled();
            expect($rootScope.$emit).toHaveBeenCalled();
            expect(returnedValue).toBe(resMock);
        });
    });

    it('Should have log out', () => {
        sut.logout();
        expect($cookies.remove).toHaveBeenCalled();
        expect($rootScope.$emit).toHaveBeenCalled();
    });

    it('As authorized user I can get user', () => {
        const user = '{ "name": "admin" }';

        $cookies.get.and.returnValue('{ "name": "admin" }');

        sut.getCurrentUser();

        expect($cookies.get()).toBe(user);
    });

    it('As unauthorized user I can\'n get user', () => {
        $cookies.get.and.returnValue(null);
        expect(sut.getCurrentUser()).toBe(null);
    });

    it('Should check is user authorized', () => {
        $cookies.get.and.returnValue('{ "name": "admin" }');
        expect(sut.isAuthorized()).toBe(true);
    });

    it('Should check is user unauthorized', () => {
        $cookies.get.and.returnValue(null);
        expect(sut.isAuthorized()).toBe(false);
    });
});