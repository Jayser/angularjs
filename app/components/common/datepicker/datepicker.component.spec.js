import Datepicer from "./datepicker.component";

let sut;

describe('Datepicker', () => {
    beforeEach(() => {
        sut = new Datepicer.controller();
    });

    it('should open menu', () => {
        sut.open();
        expect(sut.opened).toBeTruthy();
    })
});