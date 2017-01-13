export default ($httpProvider, $cookiesProvider, IdentityServiceProvider, CONSTANTS) => {
    'ngInject';

    $cookiesProvider.defaults.path = '/';
    $httpProvider.defaults.withCredentials = true;

    $httpProvider.interceptors.push(() => ({
        request(cfg) {
            const IdentityService = IdentityServiceProvider.$get();

            if (IdentityService.isAuthenticated()) {
                cfg.headers[CONSTANTS.SESSION_STORAGE.AUTH] = IdentityService.getIdentity().token;
            }

            return cfg;
        }
    }));
};