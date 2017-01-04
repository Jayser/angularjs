import template from './blog-details.jade';
import "./blog-details.scss";

export default {
    template: template(),
    bindings: {
        blogId: "@"
    },
    controller: class BlogDetails {
        constructor(BlogService) {
            'ngInject';
            this.BlogService = BlogService;
        }

        $onInit() {
            this.loading = true;
            this.BlogService.getById(this.blogId)
                .then(data  => this.blogData = data)
                .finally(() => this.loading = false)
        }
    }
}