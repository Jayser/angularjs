import BlogScreenComponent from "./blog-screen.component";
import Routes from "./blog-screen.routes";

export default angular
    .module('app.screens.blog', ['ui.router'])
    .config(Routes)
    .component('blogScreen', BlogScreenComponent)
    .name;
