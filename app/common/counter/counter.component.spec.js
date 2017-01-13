import CounterComponent from './counter.component';

describe('Counter component', () => {
    const LazyLoadService = jasmine.createSpyObj('LazyLoadService', ['load']);
    const sut = new CounterComponent.controller(LazyLoadService);
    const promise = jasmine.createSpyObj('promise', ['then']);

    describe('$onInit', () => {
        LazyLoadService.load.and.returnValue(promise);
        promise.then.and.callFake(function (cb) { cb() });

        it('should be loaded dynamic', () => {
            sut.$onInit();

            expect(sut.lazyLoadCounter).toEqual(true);
        });
    });

    it('should be increase', () => {
        sut.increment();
        expect(sut.amount).toEqual(1);
    });
});