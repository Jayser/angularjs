export default class {
    constructor($ocLazyLoad, $q) {
        'ngInject';

        this.$ocLazyLoad = $ocLazyLoad;
        this.$q = $q;
    }

    load(cb) {
        const dfd = this.$q.defer();

        cb((moduleName) => {
            this.$ocLazyLoad.load({ name: moduleName });
            dfd.resolve();
        });

        return dfd.promise;
    }
}