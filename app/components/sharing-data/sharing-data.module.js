import StorageService from './storage.service'
import SharingDataComponent from './sharing-data.component';

export default angular
    .module('app.components.sharing-data', [])
    .component('sharingData', SharingDataComponent)
    .service('StorageService', StorageService)
    .name;