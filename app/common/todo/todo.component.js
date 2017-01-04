import template from "./todo.jade";

export default {
    template: template(),
    bindings: {
        todoList: '<',
        addTodo: '&',
        clear: '&'
    }
}