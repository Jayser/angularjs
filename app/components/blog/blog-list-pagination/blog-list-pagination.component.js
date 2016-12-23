import template from "./blog-list-pagination.jade";

export default {
    template: template(),
    bindings: {
        disabled: "<",
        pageData: "<",
        onPageChange: "&"
    },
    controller: class BlogListPagination {
        constructor() {
            this.itemsPerPage = 5;
        }

        $onInit() {
            this.totalItems = this.pageData.pages * this.itemsPerPage;
        }

        $onChanges(changes){
            if(angular.isDefined(changes.disabled.currentValue)){
                this.disabled = changes.disabled.currentValue
            }
        }
    }
}