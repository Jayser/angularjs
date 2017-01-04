import datepicker from "angular-ui-bootstrap/src/datepickerPopup";
import DatePickerComponent from "./date-picker.component";

export default angular
    .module('app.common.date-picker', [ datepicker ])
    .component('datePicker', DatePickerComponent)
    .name;