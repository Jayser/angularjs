import LoginModule from './login';
import LayoutModule from './layout';
import AuthDropDownModule from './auth-drop-down';

export default angular
    .module('app.components', [
        AuthDropDownModule,
        LayoutModule,
        LoginModule
    ])
    .name;