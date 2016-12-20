import Navbar from "./navbar.component";

let sut;

describe('Navbar', () => {
    beforeEach(() => {
       sut = new Navbar.controller();
       sut.opened = false;
    });

    it('should change opened state', () => {
        sut.toggleMenu();
        expect(sut.opened).toBeTruthy();
    })
});