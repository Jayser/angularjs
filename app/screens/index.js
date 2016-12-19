import BaseScreen from './base';
import HomeScreen from './home';
import StyleGuideScreen from './style-guide';
import AboutScreen from './about';

export default angular
    .module('app.screens', [
        BaseScreen,
        HomeScreen,
        StyleGuideScreen,
        AboutScreen
    ])
    .name;