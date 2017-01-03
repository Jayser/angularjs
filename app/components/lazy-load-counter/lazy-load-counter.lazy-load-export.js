export default cb => {
    require(['../../components/lazy-load-counter/lazy-load-counter.module'], module => {
        cb(module.default);
    });
};