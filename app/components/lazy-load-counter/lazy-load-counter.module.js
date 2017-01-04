import LazyLoadComponent from './lazy-load-counter.component';

export default angular
    .module('app.components.lazy-load-counter', [])
    .component('lazyLoadCounter', LazyLoadComponent)
    .name;