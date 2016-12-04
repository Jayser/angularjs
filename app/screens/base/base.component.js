import template from './base.jade';

export default {
    template: template(),
    transclude: true,
    controller: class BaseComponent {
        constructor() {
        }
        $onInit() {
        }
    }
};