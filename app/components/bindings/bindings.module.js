import BindingsChildComponent from './child';
import BindingsComponent from './bindings.component';
import "./bindings.scss";

export default angular
    .module('app.components.bindings', [])
    .component('bindings', BindingsComponent)
    .component('bindingsChild', BindingsChildComponent)
    .name;