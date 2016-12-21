import template from "./blog.jade";

export default {
    template: template(),
    controller: class Blog {
        constructor(BlogService) {
            'ngInject;'
            this.BlogService = BlogService;
        }

        $onInit() {
            this.isLoaded = false;
            this.blogs = [];
            this.BlogService.getAll()
                .then(data => this.blogs = data.posts)
                .finally(() => this.isLoaded = true)
        }
    }
}