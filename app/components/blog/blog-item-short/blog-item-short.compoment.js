import template from "./blog-item-short.jade";

export default {
    template: template(),
    bindings: {
        blogData: "<"
    }
}