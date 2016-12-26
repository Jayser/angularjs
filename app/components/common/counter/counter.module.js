import Buttons from 'angular-ui-bootstrap/src/buttons';
import CounterComponent from './counter.component';

export default angular
    .module('app.components.common.counter', [ Buttons ])
    .component('counter', CounterComponent)
    .name;