import template from './base-screen.jade';

export default {
    template: template(),
    bindings: {
        fullScreen: "<"
    },
    transclude: true
};