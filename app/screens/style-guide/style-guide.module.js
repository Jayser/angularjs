import StyleGuideComponent from './style-guide.component';
import './style-guide.scss';

export default angular
    .module('app.screens.styleGuide', [])
    .component('styleGuideScreen', StyleGuideComponent)
    .name;