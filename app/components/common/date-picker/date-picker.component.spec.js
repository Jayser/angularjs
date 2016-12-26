import DatePickerComponent from "./date-picker.component";

describe('date-picker component', () => {
    const sut = new DatePickerComponent.controller();

    it('should be initialized', () => {
        expect(sut.constructor.length).toBe(0);
        expect(sut.dt).toBeDefined();
        expect(sut.opened).toBe(false);
    });

    it('should be open calendar', () => {
        sut.open();
        expect(sut.opened).toBe(true);
    })
});