import template from "./blog-list.jade";
import "./blog-list.scss";

export default {
    template: template(),
    bindings: {
        blogs: "<"
    }
}