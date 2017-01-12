import AccessDeniedScreen from './access-denied';
import AboutScreen from './about-screen';
import BlogScreen from './blog-screen';
import BaseScreen from './base-screen';
import HomeScreen from './home-screen';
import LoginScreen from './login-screen';
import NotFoundScreen from './404';
import StyleGuideScreen from './style-guide-screen';

export default angular
    .module('app.screens', [
        AccessDeniedScreen,
        AboutScreen,
        BaseScreen,
        BlogScreen,
        HomeScreen,
        LoginScreen,
        NotFoundScreen,
        StyleGuideScreen
    ])
    .name;