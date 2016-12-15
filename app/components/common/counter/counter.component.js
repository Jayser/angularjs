import template from './counter.jade';

export default {
    template: template(),
    controller: class Counter {
        constructor() {
            this.counter = 0;
        }

        increment() {
            this.counter++;
        }
    }
};