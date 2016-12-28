import LoginModule from './login';
import LayoutModule from './layout';
import BlogModule from './blog';
import TabsModule from './tabs';
import AuthDropDownModule from './auth-drop-down';

export default angular
    .module('app.components', [
        AuthDropDownModule,
        BlogModule,
        LayoutModule,
        LoginModule,
        TabsModule
    ])
    .name;