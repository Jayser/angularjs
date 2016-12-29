import LazyLoadComponent from './lazy-load.component';

describe('LL Counter component', () => {
    const sut = new LazyLoadComponent.controller();

    beforeEach(() => {
        sut.amount = 0;
    });

    it('should be increase', () => {
        sut.increment();
        expect(sut.amount).toEqual(1);
    });
});