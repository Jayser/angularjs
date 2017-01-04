import LazyLoadCounterComponent from './lazy-load-counter.component';

describe('LL Counter component', () => {
    const sut = new LazyLoadCounterComponent.controller();

    beforeEach(() => {
        sut.amount = 0;
    });

    it('should be increase', () => {
        sut.increment();
        expect(sut.amount).toEqual(1);
    });
});