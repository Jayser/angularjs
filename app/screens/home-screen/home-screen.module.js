import HomeComponent from './home-screen.component';
import './home-screen.scss';

export default angular
    .module('app.screens.home', [])
    .component('homeScreen', HomeComponent)
    .name;