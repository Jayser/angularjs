import template from "./navbar.jade";

export default {
    template: template(),
    controller: class Navbar {
        constructor($state) {
            'ngInject';

            this.$state = $state;
        }
    }
}