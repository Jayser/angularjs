import BaseScreen from './base';
import HomeScreen from './home';
import AboutScreen from './about';
import LoginScreen from './login';
import StyleGuideScreen from './style-guide';

export default angular
    .module('app.screens', [
        BaseScreen,
        HomeScreen,
        AboutScreen,
        LoginScreen,
        StyleGuideScreen
    ])
    .name;