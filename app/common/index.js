import IsAuthorizedModule from './is-authorized';
import CounterModule from './counter';
import DropDownModule from './drop-down';
import DatePickerModule from './date-picker';
import TodoModule from './todo';

export default angular
    .module('app.common', [
        IsAuthorizedModule,
        CounterModule,
        DropDownModule,
        DatePickerModule,
        TodoModule
    ])
    .name;

