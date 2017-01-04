import TodoComponent from './todo.component';

export default angular
    .module('app.common.todo', [])
    .component('todo', TodoComponent)
    .name;