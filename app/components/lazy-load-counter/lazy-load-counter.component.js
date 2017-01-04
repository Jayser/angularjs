import template from './lazy-load-counter.jade';

export default {
    template: template(),
    controller: class LazyLoadCounter {
        constructor() {
            this.amount = 0;
        }

        increment() {
            this.amount++;
        }
    }
};