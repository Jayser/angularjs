import NavbarComponent from './navbar.component';

describe('Navbar component', () => {
    const $state = {};
    const sut = new NavbarComponent.controller($state);

    it('$state should be initialized', () => {
        expect(sut.constructor.length).toBe(1);
        expect(sut.$state).toBe($state);
    });
});