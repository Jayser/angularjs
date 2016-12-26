import CounterComponent from './counter.component';

describe('Counter component', () => {
    const sut = new CounterComponent.controller();

    beforeEach(() => {
        sut.amount = 0;
    });

    it('should be increase', () => {
        sut.increment();
        expect(sut.amount).toEqual(1);
    });
});