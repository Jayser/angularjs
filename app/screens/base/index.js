import angular from 'angular';
import BaseComponent from './base.component';
import './base.scss';

export default angular
    .module('app.screens.base', [])
    .component('baseScreen', BaseComponent)
    .name;