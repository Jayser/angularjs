import template from './counter.jade';
import LazyLoadCounter from '../../lazy-load-counter/lazy-load-counter.lazy-load-export';

export default {
    template: template(),
    controller: class Counter {
        constructor(LazyLoadService) {
            'ngInject';

            this.amount = 0;
            this.lazyLoadCounter = false;
            this.LazyLoadService = LazyLoadService;
        }

        $onInit() {
            this.LazyLoadService.load(LazyLoadCounter).then(() => {
                this.lazyLoadCounter = true;
            });
        }

        increment() {
            this.amount++;
        }
    }
};