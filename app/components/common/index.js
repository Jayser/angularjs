import CounterModule from './counter';
import DropdownModule from './dropdown';

export default angular
    .module('app.components.common', [
        CounterModule,
        DropdownModule
    ])
    .name;

