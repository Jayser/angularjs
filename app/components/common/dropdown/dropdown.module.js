import Dropdown from 'angular-ui-bootstrap/src/dropdown';
import DropdownComponent from './dropdown.component';
import './dropdown.scss';

export default angular
    .module('app.components.common.dropdown', [Dropdown])
    .component('dropdown', DropdownComponent)
    .name;