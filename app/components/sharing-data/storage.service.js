export default class {
    constructor() {
        this.storage = [];
    }

    add(item) {
        this.storage.push(item);
    }

    clear() {
        this.storage.length = 0;
    }

    getAll() {
        return this.storage;
    }
}