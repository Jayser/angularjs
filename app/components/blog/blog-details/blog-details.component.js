import template from './blog-details.jade';
import "./blog-details.scss";

export default {
    template: template(),
    bindings: {
        blogData: "<"
    }
}