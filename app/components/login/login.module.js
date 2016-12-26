import AuthorizationComponent from './login.component';
import './login.scss';

export default angular
    .module('app.components.login', [])
    .component('login', AuthorizationComponent)
    .name;