import LoginModule from './login';
import LayoutModule from './layout';
import BlogModule from './blog';
import AuthDropDownModule from './auth-drop-down';

export default angular
    .module('app.components', [
        AuthDropDownModule,
        BlogModule,
        LayoutModule,
        LoginModule
    ])
    .name;