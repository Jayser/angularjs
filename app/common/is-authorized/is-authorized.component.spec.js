import IsAuthorizedComponent from './is-authorized.component';

describe('is-authorized component', () => {
    const $IdentityService = jasmine.createSpyObj('$IdentityService', ['isAuthenticated']);
    const sut = new IsAuthorizedComponent.controller($IdentityService);

    it('$IdentityService should be initialized', () => {
        expect(sut.constructor.length).toBe(1);
    });

    it('Should show content is user authorized', () => {
        $IdentityService.isAuthenticated.and.returnValue(true);
        expect(sut.isAuthenticated()).toBe(true);
    });

    it('Should hide content is user unauthorized', () => {
        $IdentityService.isAuthenticated.and.returnValue(false);
        expect(sut.isAuthenticated()).toBe(false);
    });
});