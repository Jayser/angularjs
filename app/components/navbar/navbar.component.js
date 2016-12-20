import template from "./navbar.jade";

export default {
    template: template(),
    controller: class Navbar {
        constructor() {
            this.opened = false;
        }

        toggleMenu() {
            this.opened = !this.opened;
        }
    }
}