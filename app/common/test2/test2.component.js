import templateUrl from './test2.jade';

export const Test2Component = {
    template: templateUrl(),
    controller: class Test2Component {
        constructor() {
        }
        $onInit() {
            console.log('TestCommonComponent => ng init');
        }
    }
};