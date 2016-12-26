export default ($rootScope, $cookies, $http, CONSTANTS) => {
    'ngInject';

    const params = { headers: { 'Content-Type': 'application/json;charset=utf-8' } };

    return {
        login: (name, password) => {
            return $http.post(CONSTANTS.URLS.LOGIN, { name, password }, params).then(res => {
                $cookies.put(CONSTANTS.COOKIES.AUTH, angular.toJson(res.data));
                $rootScope.$emit(CONSTANTS.EVENTS.USER_LOGIN, res.data);

                return res;
            });
        },
        logout: () => {
            $cookies.remove(CONSTANTS.COOKIES.AUTH);
            $rootScope.$emit(CONSTANTS.EVENTS.USER_LOGOUT);
        },
        getCurrentUser() {
            return angular.fromJson($cookies.get(CONSTANTS.COOKIES.AUTH));
        },
        isAuthorized() {
            return Boolean(this.getCurrentUser());
        }
    }
}
