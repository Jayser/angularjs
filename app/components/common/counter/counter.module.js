import Buttons from 'angular-ui-bootstrap/src/buttons';
import CounterComponent from './counter.component';
import './counter.scss';

export default angular
    .module('app.components.common.counter', [Buttons])
    .component('counter', CounterComponent)
    .name;