import Datepicker from "angular-ui-bootstrap/src/datepickerPopup";
import DatepickerCompoment from "./datepicker.component";

export default angular
    .module('app.components.common.datepicker', [Datepicker])
    .component('datepicker', DatepickerCompoment)
    .name;