import lazyLoadCounterComponent from '../../components/lazy-load-counter/lazy-load-counter.lazy-load-export';

export const lazyLoadCounter = LazyLoadService => {
    'ngInject';

    return LazyLoadService.load(lazyLoadCounterComponent);
};