export default cb => {
    require(['./tabs.module'], module => {
        cb(module.default);
    });
};