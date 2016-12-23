export class BlogService {
    // TODO: move to services folder

    constructor($http) {
        'ngInject';
        this.$http = $http;
        this.API_URL = "https://sarhan-blog.herokuapp.com";
    }

    getAll(page = 1) {
        return this.$http.get(`${this.API_URL}/api/posts`, {params: {page: page}})
            .then(response => response.data.responses)
    }

    getById(blogId) {
        return this.$http.get(`${this.API_URL}/api/posts/${blogId}`)
            .then(response => response.data);
    }
}