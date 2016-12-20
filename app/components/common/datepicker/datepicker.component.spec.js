import Datepicer from "./datepicker.component";

let sut;

describe('Datepicker', () => {
    let time;

    beforeEach(() => {
        time = new Date();
        sut = new Datepicer.controller();
    });

    it('should be initialized with current time', () => {
        expect(sut.dt.getTime()).toEqual(time.getTime())
    });

    it('should open menu', () => {
        sut.open();
        expect(sut.opened).toBeTruthy();
    })
});