import Pagination from "angular-ui-bootstrap/src/pagination";
import BlogComponent from './blog.component';
import BlogItemComponent from './blog-item';
import BlogListComponent from "./blog-list"
import BlogListPaginationComponent from './blog-list-pagination'
import BlogItemShortComponent from "./blog-item-short";
import {BlogService} from './blog.service';
import {shotFilter as BlogFilter} from "./blog.filter";


export default angular
    .module('app.components.blog', [Pagination])
    .component('blog', BlogComponent)
    .component('blogItem', BlogItemComponent)
    .component('blogItemShort', BlogItemShortComponent)
    .component('blogList', BlogListComponent)
    .component('blogListPagination', BlogListPaginationComponent)
    .service('BlogService', BlogService)
    .filter("shortBlog", BlogFilter)
    .name;