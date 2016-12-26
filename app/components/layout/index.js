import HeaderModule from './header';
import FooterModule from './footer';
import NavbarModule from './navbar';

export default angular
    .module('app.components.layout', [
        HeaderModule,
        FooterModule,
        NavbarModule
    ])
    .name;

