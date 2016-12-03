import templateUrl from './base.jade';

export default {
    template: templateUrl(),
    transclude: true,
    controller: class BaseComponent {
        constructor() {
        }
        $onInit() {
        }
    }
};