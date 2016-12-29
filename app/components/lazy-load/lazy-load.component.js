import template from './lazy-load.jade';

export default {
    template: template(),
    controller: class LazyLoad {
        constructor() {
            this.amount = 0;
        }

        increment() {
            this.amount++;
        }
    }
};