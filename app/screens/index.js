import BaseScreen from './base-screen';
import HomeScreen from './home-screen';
import StyleGuideScreen from './style-guide-screen';
import AboutScreen from './about-screen';
import BlogScreen from './blog-screen';

export default angular
    .module('app.screens', [
        BaseScreen,
        HomeScreen,
        StyleGuideScreen,
        AboutScreen,
        BlogScreen
    ])
    .name;