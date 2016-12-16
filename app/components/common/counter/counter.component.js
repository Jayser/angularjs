import template from './counter.jade';

export default {
    template: template(),
    controller: class Counter {
        constructor() {
            this.amount = 0;
        }

        increment() {
            this.amount++;
        }
    }
};