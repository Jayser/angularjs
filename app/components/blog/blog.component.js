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
            console.info('blog component initialized');
            this.fetchBlogList(this.$state.params.page);
        }

        fetchBlogList(page, reload) {
            this.disabled = true;
            this.BlogService.getAll(page)
                .then((data) => {
                    this.blogData = data;
                    if(reload) this.reloadState(page)
                })
                .finally(() => this.disabled = false)
        }

        reloadState(page) {
            this.$state.transitionTo(this.$state.current.name, angular.extend(this.$state.params, {page}))
        }
    }
}