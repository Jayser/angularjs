import template from "./date-picker.jade";

export default {
    template: template(),
    controller: class DatePicker {
        constructor() {
            this.dt = new Date();
            this.opened = false;
        }

        open() {
            this.opened = true;
        }
    }
}