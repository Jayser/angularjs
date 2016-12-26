import StyleGuideComponent from './style-guide-screen.component';
import routes from './style-guide-screen.routes';
import './style-guide-screen.scss';

export default angular
    .module('app.screens.styleGuide', ['ui.router'])
    .config(routes)
    .component('styleGuideScreen', StyleGuideComponent)
    .name;