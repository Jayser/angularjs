import IdentityService from './identity.service';

describe('IdentityService', () => {
    const $sessionStorage = jasmine.createSpyObj('$sessionStorage', ['$reset']);
    const $http = jasmine.createSpyObj('$http', ['post']);
    const CONSTANTS = {
        URLS: {
            AUTH: '/rest/login'
        },
        TOKEN_NAME: 'x-token',
        SESSION_STORAGE: {
            AUTH: 'authenticate'
        }
    };
    const identity = {
        email: 'admin@admin.com',
        roles: ['ADMIN'],
        token: 'someToken'
    };
    const token = '179daf11-44c6-4e9e-9270-b848dcfdfac5';
    const promise = jasmine.createSpyObj('promise', ['then']);
    const sut = new IdentityService($sessionStorage, $http, CONSTANTS);

    beforeEach(() => {
        sut._identity = identity;
        sut._authenticated = true;
    });

    describe('_setToStorage should', () => {
        it('add identity to storage', () => {
            sut._setToStorage(identity);

            expect($sessionStorage[CONSTANTS.SESSION_STORAGE.AUTH]).toBe(identity);
        });

        it('remove identity to storage', () => {
            sut._setToStorage(null);

            expect($sessionStorage.$reset).toHaveBeenCalledWith({
                [CONSTANTS.SESSION_STORAGE.AUTH]: null
            });
        });
    });

    describe('isAuthenticated should be', () => {
        it('negative', () => {
            sut._authenticated = false;
            expect(sut.isAuthenticated()).toEqual(false);
        });

        it('positive', () => {
            expect(sut.isAuthenticated()).toEqual(true);
        });
    });

    describe('isInRole check on', () => {
        it('authenticate user with correct role', () => {
            expect(sut.isInRole('ADMIN')).toBe(true);
        });

        it('for authenticate user with wrong role', () => {
            expect(sut.isInRole('GUEST')).toBe(false);
        });

        it('for unauthenticated user', () => {
            sut._authenticated = false;
            expect(sut.isInRole()).toBe(false);
        });
    });

    describe('isInAnyRole check on', () => {
        it('contained one of role', () => {
            expect(sut.isInAnyRole(['ADMIN', 'GUEST'])).toBe(true);
        });

        it('don\'t contained one of role', () => {
            expect(sut.isInRole(['GUEST', 'USER'])).toBe(false);
        });
    });

    describe('authenticate have to', () => {
        beforeEach(() => {
            sut._identity = null;
            sut._authenticated = false;
        });

        it('set user data', () => {
            sut.authenticate(identity);

            expect(sut._identity).toEqual(identity);
            expect(sut._authenticated).toEqual(true);
        });

        it('clear user data', () => {
            sut.authenticate(null);

            expect(sut._identity).toEqual(null);
            expect(sut._authenticated).toEqual(false);
        });

        it('set to storage date', () => {
            sut._setToStorage = jasmine.createSpy('_setToStorage');

            sut.authenticate(identity);

            expect(sut._setToStorage).toHaveBeenCalledWith(identity);
        });

        it('set to storage date', () => {
            sut._setToStorage = jasmine.createSpy('_setToStorage');

            sut.authenticate(null);

            expect(sut._setToStorage).toHaveBeenCalledWith(null);
        });
    });

    it('getIdentity have to return identity', () => {
        expect(sut.getIdentity()).toEqual(sut._identity);
    });

    describe('identity should', () => {
        const email = 'admin@admin.com';
        const password = 'admin';
        const mock = {
            email: email,
            data: 'USER',
            headers: tokenName => ({ [CONSTANTS.TOKEN_NAME]: token }[tokenName] )
        };

        beforeEach(() => {
            sut.authenticate = jasmine.createSpy('authenticate');

            promise.then.and.callFake(function (cb) {
                cb(mock);
                return this;
            });

            $http.post.and.returnValue(promise);
        });

        it('should set user data', () => {
            sut.identity(email, password);

            const result = {
                email,
                roles: ['USER'],
                token
            };

            expect(sut.authenticate).toHaveBeenCalledWith(result);
        });
    })
});