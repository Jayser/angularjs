import BlogScreenComponent from "./blog.component";
import routes from "./blog.routes";

export default angular
    .module('app.screens.blog', [])
    .config(routes)
    .component('blogScreen', BlogScreenComponent)
    .name;
