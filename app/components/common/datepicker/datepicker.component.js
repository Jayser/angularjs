import template from "./datepicker.jade";

export default {
    template: template(),
    controller: class Datepicker {
        constructor() {
            this.dt = new Date();
            this.opened = false;
        }

        open() {
            this.opened = true;
        }
    }
}