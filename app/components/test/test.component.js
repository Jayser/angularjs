import templateUrl from './test.jade';

export const TestComponent = {
    template: templateUrl(),
    controller: class TestComponent {
        constructor() {
        }
        $onInit() {
            console.log('TestComponent => ng init');
        }
    }
};