import templateUrl from './test2.jade';

export const Test2Component = {
    template: templateUrl(),
    controller: class Test2Component {
        constructor($log) {
            this.$log = $log;
        }
        $onInit() {
            this.$log('TestCommonComponent => ng init');
        }
    }
};