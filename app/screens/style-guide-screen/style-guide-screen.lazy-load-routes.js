export const lazyLoadCounter = ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
    const dfd = $q.defer();

    require.ensure([], () => {
        const moduleName = require('../../components/lazy-load-counter/lazy-load-counter.module').default;

        $ocLazyLoad.load({ name: moduleName });

        dfd.resolve(moduleName);
    });

    return dfd.promise;
}];