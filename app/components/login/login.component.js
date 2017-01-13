import template from './login.jade';

export default {
    template: template(),
    controller: class Login {
        constructor($state, AuthService) {
            'ngInject';

            this.$state = $state;
            this.AuthService = AuthService;
        }

        submitForm({ $valid }) {
            if($valid) {
                this.AuthService.login(this.email, this.password);
            }
        }
    }
};