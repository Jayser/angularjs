import BindingsParentComponent from './parent';
import BindingsChildComponent from './child';
import BindingsComponent from './bindings.component'

export default angular
    .module('app.components.bindings', [])
    .component('bindings', BindingsComponent)
    .component('bindingsParent', BindingsParentComponent)
    .component('bindingsChild', BindingsChildComponent)
    .name;