import cut from './cut.filter';

export default angular
    .module('app.filters', [])
    .filter('cut', cut)
    .name;