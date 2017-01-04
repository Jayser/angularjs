export default cb => {
    require(['./lazy-load-counter.module'], module => {
        cb(module.default);
    });
};