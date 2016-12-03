import angular from 'angular';
import TestComponent from './test.component';
import './test.scss';

export default angular
    .module('app.components.test', [])
    .component('test', TestComponent)
    .name;