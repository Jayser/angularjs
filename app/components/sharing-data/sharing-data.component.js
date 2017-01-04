import template from "./sharing-data.jade";

export default {
    template: template(),
    controller: class SharingData {
        constructor(StorageService) {
            'ngInject';

            this.StorageService = StorageService;
        }

        $onInit() {
            this.todoList = this.StorageService.getAll();
        }

        addTodo(todoField) {
            this.StorageService.add(todoField);
        }

        clear() {
            this.StorageService.clear();
        }
    }
}