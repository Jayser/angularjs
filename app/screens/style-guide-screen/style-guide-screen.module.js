import StyleGuideComponent from './style-guide-screen.component';
import Routes from './style-guide-screen.routes';
import './style-guide-screen.scss';

export default angular
    .module('app.screens.styleGuide', ['ui.router'])
    .config(Routes)
    .component('styleGuideScreen', StyleGuideComponent)
    .name;