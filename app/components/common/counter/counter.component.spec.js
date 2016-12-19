import Counter from './counter.component';

let sut;

describe('Counter', () => {
    beforeEach(() => {
        sut = new Counter.controller();
        sut.amount = 0;
    });

    it('should be increase', () => {
        sut.increment();
        expect(sut.amount).toEqual(1);
    });
});