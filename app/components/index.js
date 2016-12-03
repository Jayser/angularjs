import angular from 'angular';
import TestModule from './test'

export default angular
    .module('app.components', [
        TestModule
    ])
    .name;