import IsAuthorizedComponent from './is-authorized.controller';

describe('is-authorized component', () => {

    let $IdentityService, sut;

    beforeEach(() => {
        $IdentityService = jasmine.createSpyObj('$IdentityService', ['isAuthenticated', 'isInAnyRole']);
        sut = new IsAuthorizedComponent($IdentityService);
    });

    it('$IdentityService should be initialized', () => {
        expect(sut.constructor.length).toBe(1);
    });

    describe('Should show content', () => {
        describe('is user authorized', () => {
            it('isAuthenticated', () => {
                sut.isAuthenticated = true;
                $IdentityService.isAuthenticated.and.returnValue(true);

                expect(sut.isAllowed()).toBe(true);
            });

            it('and has correct roles', () => {
                sut.isInAnyRole = ['ADMIN'];
                $IdentityService.isInAnyRole.and.returnValue(true);

                expect(sut.isAllowed()).toBe(true);
            });
        });

        describe('is user unauthorized', () => {
            it('isAuthenticated', () => {
                sut.isAuthenticated = false;
                $IdentityService.isAuthenticated.and.returnValue(false);

                expect(sut.isAllowed()).toBe(true);
            });
        });
    });

    describe('Should hide content', () => {
        describe('is user authorized', () => {
            it('and hasn\'t correct roles', () => {
                sut.isInAnyRole = ['GUEST'];

                $IdentityService.isInAnyRole.and.returnValue(false);

                expect(sut.isAllowed()).toBe(false);
            });
        });

        describe('is user unauthorized', () => {
            it('isAuthenticated', () => {
                sut.isAuthenticated = true;
                $IdentityService.isAuthenticated.and.returnValue(false);

                expect(sut.isAllowed()).toBe(false);
            });

            it('and has roles', () => {
                sut.isInAnyRole = ['ADMIN'];
                $IdentityService.isInAnyRole.and.returnValue(false);

                expect(sut.isAllowed()).toBe(false);
            });
        });
    });
});