import angular from 'angular';
import { Test2Component } from './test2.component';
import './test2.scss';

export const TestModule = angular
    .module('app.common.test2', [])
    .component('test2', Test2Component)
    .name;