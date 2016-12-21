import template from './blog-item.jade';
import "./blog-item.scss";

export default {
    template: template(),
    bindings: {
        blogData: "<"
    }
}