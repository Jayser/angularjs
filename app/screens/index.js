import BaseScreen from './base';
import HomeScreen from './home';
import StyleGuideScreen from './style-guide';

export default angular
    .module('app.screens', [
        BaseScreen,
        HomeScreen,
        StyleGuideScreen
    ])
    .name;