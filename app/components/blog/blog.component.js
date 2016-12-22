import template from "./blog.jade";

export default {
    template: template(),
    controller: class Blog {
        constructor($state, BlogService) {
            'ngInject';
            this.BlogService = BlogService;
            this.$state = $state;
        }

        $onInit() {
            console.log('blog component initialized');
            let page = this.$state.params.page || 1;
            this.isLoaded = false;
            this.BlogService.getAll(page)
                .then(data => this.blogData = data)
                .finally(() => this.isLoaded = true)
        }

        fetchBlogs({page}) {
            this.disabled = true;
            this.BlogService.getAll(page)
                .then(data => {
                    this.blogData = data;
                    this.reloadState(page);
                })
                .finally(() => this.disabled = false)
        }

        reloadState(page) {
            this.$state.transitionTo(
                this.$state.current.name,
                angular.extend(this.$state.params, {page}),
                {notify: false}
            )
        }
    }
}