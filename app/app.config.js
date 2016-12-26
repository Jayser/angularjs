export default ($httpProvider, $cookiesProvider) => {
    'ngInject';

    $cookiesProvider.defaults.path = '/';
    $httpProvider.defaults.withCredentials = true;

    $httpProvider.interceptors.push($q => ({
        'responseError': rejection => {
            return $q.reject(rejection);
        },

        'requestError': rejection => {
            return $q.reject(rejection);
        }
    }));
};