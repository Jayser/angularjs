import LoginModule from './login';
import LayoutModule from './layout';
import BlogModule from './blog';
import TabsModule from './tabs';
import AuthDropDownModule from './auth-drop-down';
import BindingsModule from './bindings';

export default angular
    .module('app.components', [
        AuthDropDownModule,
        BlogModule,
        LayoutModule,
        LoginModule,
        TabsModule,
        BindingsModule
    ])
    .name;