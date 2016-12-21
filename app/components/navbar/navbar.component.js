import template from "./navbar.jade";

export default {
    template: template(),
    controller: class Navbar {
        constructor($state) {
            'ngInject';
            this.opened = false;
            this.state = $state;
        }

        toggleMenu() {
            this.opened = !this.opened;
        }
    }
}