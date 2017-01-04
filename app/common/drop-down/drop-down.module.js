import dropdown from 'angular-ui-bootstrap/src/dropdown';
import DropDownComponent from './drop-down.component';

export default angular
    .module('app.common.drop-down', [ dropdown ])
    .component('dropDown', DropDownComponent)
    .name;