import IsAuthorizedModule from './is-authorized';
import CounterModule from './counter';
import DropDownModule from './drop-down';
import DatePickerModule from './date-picker';
// import TabsModule from './tabs';

export default angular
    .module('app.components.common', [
        IsAuthorizedModule,
        CounterModule,
        DropDownModule,
        DatePickerModule,
        // TabsModule
    ])
    .name;

