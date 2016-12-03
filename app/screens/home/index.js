import angular from 'angular';
import HomeComponent from './home.component';
import './home.scss';

export default angular
    .module('app.screens.home', [])
    .component('home', HomeComponent)
    .name;