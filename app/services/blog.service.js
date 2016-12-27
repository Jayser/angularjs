export default class BlogService {
    constructor($http, CONSTANTS) {
        'ngInject';
        this.$http = $http;
        this.CONSTANTS = CONSTANTS;
    }

    getAll(page = 1) {
        return this.$http.get(`${this.CONSTANTS.URLS.POSTS}`, {params: {page: page}})
            .then(response => response.data.responses)
    }

    getById(blogId) {
        return this.$http.get(`${this.CONSTANTS.URLS.POSTS}/${blogId}`)
            .then(response => response.data);
    }
}