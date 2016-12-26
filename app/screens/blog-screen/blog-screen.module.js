import BlogScreenComponent from "./blog-screen.component";
import routes from "./blog-screen.routes";

export default angular
    .module('app.screens.blog', [])
    .config(routes)
    .component('blogScreen', BlogScreenComponent)
    .name;
