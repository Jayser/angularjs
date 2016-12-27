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
            this.currentPage = this.$state.params.page;
            this.itemsPerPage = 5;
            this.posts = [];
            this.fetchBlogList()
        }

        onBlogDataReceived(data) {
            this.totalItems = this.itemsPerPage * data.pages;
            this.currentPage = data.currentPage;
            this.posts = data.posts;
        }

        fetchBlogList() {
            this.loading = true;
            return this.BlogService.getAll(this.currentPage)
                .then(this.onBlogDataReceived.bind(this))
                .finally(() => this.loading = false)
        }

        fetchAndReload() {
            this.fetchBlogList()
                .then(this.reloadState.bind(this))
        }

        reloadState() {
            this.$state.transitionTo(this.$state.current.name, angular.extend(
                this.$state.params, {page: this.currentPage})
            )
        }
    }
}