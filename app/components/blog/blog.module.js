import Pagination from "angular-ui-bootstrap/src/pagination";

import BlogComponent from './blog.component';
import BlogDetailsComponent from './blog-details';
import BlogListComponent from "./blog-list"
import BlogListPaginationComponent from './blog-list-pagination'
import {BlogService} from './blog.service';

export default angular
    .module('app.components.blog', [Pagination])
    .component('blog', BlogComponent)
    .component('blogDetails', BlogDetailsComponent)
    .component('blogList', BlogListComponent)
    .component('blogListPagination', BlogListPaginationComponent)
    .service('BlogService', BlogService)
    .name;