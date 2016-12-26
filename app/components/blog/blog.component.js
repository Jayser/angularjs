import template from "./blog.jade";

export default {
    template: template(),
    controller: class Blog {
        constructor($state, BlogService) {
            'ngInject';

            this.BlogService = BlogService;
            this.$state = $state;
            this.currentPage = this.$state.params.page;
            this.itemsPerPage = 5;
            this.posts = [];
        }

        $onInit() {
            this.loading = true;
            this.fetchBlogList()
                .finally(() => this.loading = false)
        }

        fetchBlogList() {
            return this.BlogService.getAll(this.currentPage)
                .then((data) => {
                    this.totalItems = this.itemsPerPage * data.pages;
                    this.currentPage = data.currentPage;
                    this.posts = data.posts;
                })
        }

        fetchAndReload() {
            this.disabled = true;
            this.fetchBlogList()
                .then(() => this.reloadState())
                .finally(() => this.disabled = false)
        }

        reloadState() {
            this.$state.transitionTo(this.$state.current.name, angular.extend(
                this.$state.params, {page: this.currentPage})
            )
        }
    }
}