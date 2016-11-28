import angular from 'angular';
import { HomeComponent } from './home.component';
import './home.scss';

export const HomeModule = angular
    .module('app.components.home', [])
    .component('home', HomeComponent)
    .name;