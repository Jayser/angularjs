import angular from 'angular';
import BaseScreen from './base';
import HomeScreen from './home';

export default angular
    .module('app.screens', [
        BaseScreen,
        HomeScreen
    ])
    .name;