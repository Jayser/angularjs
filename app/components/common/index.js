import CounterModule from './counter';
import DropdownModule from './dropdown';
import DatepickerModule from './datepicker';

export default angular
    .module('app.components.common', [
        CounterModule,
        DropdownModule,
        DatepickerModule
    ])
    .name;

