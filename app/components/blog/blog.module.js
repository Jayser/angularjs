import Pagination from "angular-ui-bootstrap/src/pagination";

import BlogComponent from './blog.component';
import BlogDetailsComponent from './blog-details';
import BlogListComponent from "./blog-list"
import {BlogService} from './blog.service';

export default angular
    .module('app.components.blog', [Pagination])
    .component('blog', BlogComponent)
    .component('blogDetails', BlogDetailsComponent)
    .component('blogList', BlogListComponent)
    .service('BlogService', BlogService)
    .name;