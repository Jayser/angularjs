import StyleGuideComponent from './style-guide.component';
import routes from './style-guide.routes';
import './style-guide.scss';

export default angular
    .module('app.screens.styleGuide', ['ui.router'])
    .config(routes)
    .component('styleGuideScreen', StyleGuideComponent)
    .name;