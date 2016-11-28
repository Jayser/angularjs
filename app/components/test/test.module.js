import angular from 'angular';
import { TestComponent } from './test.component';
import './test.scss';

export const TestModule = angular
    .module('app.components.test', [])
    .component('test', TestComponent)
    .name;