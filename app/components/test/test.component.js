import templateUrl from './test.jade';

export const TestComponent = {
    template: templateUrl(),
    controller: class TestComponent {
        constructor($log) {
            this.$log = $log;
        }
        $onInit() {
            this.$log('TestComponent => ng init');
        }
    }
};