import template from "./blog-list-pagination.jade";

export default {
    template: template(),
    bindings: {
        blogPages: "<"
    },
    controller: class BlogListPagination {
        constructor($state) {
            'ngInject;'
            this.$state = $state;
            this.disabled = false;
        }

        $onInit() {
            this.itemsPerPage = 5;
            this.currentPage = this.blogPages.currentPage;
            this.totalItems = this.blogPages.pages * this.itemsPerPage;
            this.blogs = this.blogPages.posts;
        }

        onPageChanged() {
            this.disabled = true;
            this.$state.transitionTo(
                this.$state.current.name,
                angular.extend(this.$state.params, {page: this.currentPage}),
                {reload: true}
            );
        }
    }
}