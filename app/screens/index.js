import BaseScreen from './base-screen';
import HomeScreen from './home-screen';
import AboutScreen from './about-screen';
import BlogScreen from './blog-screen';
import LoginScreen from './login-screen';
import StyleGuideScreen from './style-guide-screen';

export default angular
    .module('app.screens', [
        AboutScreen,
        BaseScreen,
        BlogScreen,
        HomeScreen,
        LoginScreen,
        StyleGuideScreen
    ])
    .name;