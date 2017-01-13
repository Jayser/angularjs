import IsAuthorizedComponent from './is-authorized.component.js';
import IsAuthorizedDirective from './is-authorized.directive.js';

export default angular
    .module('app.common.is-authorized', [])
    .component('isAuthorized', IsAuthorizedComponent)
    .directive('isAuthorized', IsAuthorizedDirective)
    .name;