import CounterComponent from './counter.component';

describe('Counter component', () => {
    const LazyLoadService = jasmine.createSpyObj('LazyLoadService', ['load']);
    const sut = new CounterComponent.controller(LazyLoadService);

    beforeEach(() => {
        sut.amount = 0;
        sut.lazyLoadCounter = false;
        sut.LazyLoadService = LazyLoadService
    });

    it('should be increase', () => {
        sut.increment();
        expect(sut.amount).toEqual(1);
    });
});